<#
.SYNOPSIS
    Pulls email sequence (campaign) performance data from the Apollo API.

.DESCRIPTION
    Fetches a sequence by ID from Apollo, saves the raw JSON response, and writes a
    computed metrics summary (overall + per-step) that the evaluation prompt consumes.

    Requires an Apollo MASTER API key (sequence endpoints are gated to master keys on
    paid plans). Provide it via the APOLLO_API_KEY environment variable or a .env file
    in the project root containing: APOLLO_API_KEY=your_key_here

.PARAMETER SequenceId
    The Apollo sequence (emailer_campaign) ID. Find it with -ListSequences or from the
    URL when viewing the sequence in Apollo (app.apollo.io/#/sequences/<id>).

.PARAMETER ListSequences
    Instead of fetching stats, search your sequences by name to find IDs.

.PARAMETER NameFilter
    Optional name filter used with -ListSequences.

.EXAMPLE
    .\scripts\Fetch-ApolloStats.ps1 -ListSequences -NameFilter "Call Boss"
    .\scripts\Fetch-ApolloStats.ps1 -SequenceId 66f1a2b3c4d5e6f7a8b9c0d1
#>
[CmdletBinding(DefaultParameterSetName = 'Fetch')]
param(
    [Parameter(ParameterSetName = 'Fetch', Mandatory = $true, Position = 0)]
    [string]$SequenceId,

    [Parameter(ParameterSetName = 'List', Mandatory = $true)]
    [switch]$ListSequences,

    [Parameter(ParameterSetName = 'List')]
    [string]$NameFilter = "",

    [string]$OutDir = "data"
)

$ErrorActionPreference = 'Stop'
$ProjectRoot = Split-Path -Parent $PSScriptRoot

# --- Resolve API key: env var first, then .env file ---
$ApiKey = $env:APOLLO_API_KEY
if (-not $ApiKey) {
    $EnvFile = Join-Path $ProjectRoot ".env"
    if (Test-Path $EnvFile) {
        foreach ($line in Get-Content $EnvFile) {
            if ($line -match '^\s*APOLLO_API_KEY\s*=\s*(.+?)\s*$') {
                $ApiKey = $Matches[1].Trim('"').Trim("'")
                break
            }
        }
    }
}
if (-not $ApiKey) {
    Write-Error "No Apollo API key found. Set the APOLLO_API_KEY environment variable or create a .env file in the project root with: APOLLO_API_KEY=your_key"
    exit 1
}

$Headers = @{
    'x-api-key'     = $ApiKey
    'Content-Type'  = 'application/json'
    'Cache-Control' = 'no-cache'
}
$BaseUrl = 'https://api.apollo.io/api/v1'

# --- List mode: search sequences by name ---
if ($ListSequences) {
    $Body = @{ page = 1; per_page = 50 }
    if ($NameFilter) { $Body['q_name'] = $NameFilter }
    $Response = Invoke-RestMethod -Method Post -Uri "$BaseUrl/emailer_campaigns/search" -Headers $Headers -Body ($Body | ConvertTo-Json)
    if (-not $Response.emailer_campaigns) {
        Write-Output "No sequences found."
        exit 0
    }
    foreach ($seq in $Response.emailer_campaigns) {
        Write-Output ("{0}  |  {1}  |  active: {2}" -f $seq.id, $seq.name, $seq.active)
    }
    exit 0
}

# --- Fetch mode: pull full sequence with steps + stats ---
Write-Output "Fetching sequence $SequenceId from Apollo..."
$Response = Invoke-RestMethod -Method Get -Uri "$BaseUrl/emailer_campaigns/$SequenceId" -Headers $Headers

$OutPath = Join-Path $ProjectRoot $OutDir
if (-not (Test-Path $OutPath)) { New-Item -ItemType Directory -Path $OutPath | Out-Null }

$DateStamp = Get-Date -Format 'yyyy-MM-dd'
$RawFile = Join-Path $OutPath "$DateStamp-raw.json"
$Response | ConvertTo-Json -Depth 20 | Out-File -FilePath $RawFile -Encoding utf8

# --- Compute a metrics summary (tolerant of missing fields) ---
$c = $Response.emailer_campaign
if (-not $c) { $c = $Response }

function Get-Rate($numerator, $denominator) {
    if ($denominator -and $denominator -gt 0) {
        return [math]::Round(($numerator / $denominator) * 100, 2)
    }
    return $null
}

$Delivered = $c.unique_delivered
$Summary = [ordered]@{
    pulled_at          = (Get-Date -Format 'o')
    sequence_id        = $c.id
    sequence_name      = $c.name
    active             = $c.active
    created_at         = $c.created_at
    num_steps          = $c.num_steps
    unique_scheduled   = $c.unique_scheduled
    unique_delivered   = $Delivered
    unique_bounced     = $c.unique_bounced
    unique_opened      = $c.unique_opened
    unique_replied     = $c.unique_replied
    unique_clicked     = $c.unique_clicked
    unique_unsubscribed= $c.unique_unsubscribed
    unique_spam_blocked= $c.unique_spam_blocked
    delivery_rate_pct  = Get-Rate $Delivered $c.unique_scheduled
    bounce_rate_pct    = Get-Rate $c.unique_bounced $c.unique_scheduled
    open_rate_pct      = Get-Rate $c.unique_opened $Delivered
    reply_rate_pct     = Get-Rate $c.unique_replied $Delivered
    click_rate_pct     = Get-Rate $c.unique_clicked $Delivered
    unsubscribe_rate_pct = Get-Rate $c.unique_unsubscribed $Delivered
    steps              = @()
}

# Per-step / per-variant breakdown from emailer_steps + emailer_touches
$Steps = $Response.emailer_steps
$Touches = $Response.emailer_touches
$Templates = $Response.emailer_templates

if ($Steps) {
    foreach ($step in $Steps) {
        $StepInfo = [ordered]@{
            step_id   = $step.id
            position  = $step.position
            type      = $step.type
            wait_time = $step.wait_time
            variants  = @()
        }
        if ($Touches) {
            $StepTouches = $Touches | Where-Object { $_.emailer_step_id -eq $step.id }
            foreach ($touch in $StepTouches) {
                $Template = $null
                if ($Templates) {
                    $Template = $Templates | Where-Object { $_.id -eq $touch.emailer_template_id } | Select-Object -First 1
                }
                $TDelivered = $touch.unique_delivered
                $Variant = [ordered]@{
                    touch_id       = $touch.id
                    status         = $touch.status
                    subject        = $null
                    body_text      = $null
                    scheduled      = $touch.unique_scheduled
                    delivered      = $TDelivered
                    bounced        = $touch.unique_bounced
                    opened         = $touch.unique_opened
                    replied        = $touch.unique_replied
                    clicked        = $touch.unique_clicked
                    unsubscribed   = $touch.unique_unsubscribed
                    spam_blocked   = $touch.unique_spam_blocked
                    open_rate_pct  = Get-Rate $touch.unique_opened $TDelivered
                    reply_rate_pct = Get-Rate $touch.unique_replied $TDelivered
                }
                if ($Template) {
                    $Variant['subject'] = $Template.subject
                    $BodyText = $Template.body_text
                    if (-not $BodyText -and $Template.body_html) {
                        $BodyText = ($Template.body_html -replace '<br\s*/?>', "`n" -replace '</p>', "`n" -replace '<[^>]+>', '').Trim()
                    }
                    $Variant['body_text'] = $BodyText
                }
                $StepInfo.variants += $Variant
            }
        }
        $Summary.steps += $StepInfo
    }
}

$SummaryFile = Join-Path $OutPath "$DateStamp-summary.json"
$Summary | ConvertTo-Json -Depth 10 | Out-File -FilePath $SummaryFile -Encoding utf8

Write-Output ""
Write-Output "Sequence : $($Summary.sequence_name)"
Write-Output "Raw JSON : $RawFile"
Write-Output "Summary  : $SummaryFile"
Write-Output ""
Write-Output ("Scheduled: {0} | Delivered: {1} ({2}%) | Opened: {3} ({4}%) | Replied: {5} ({6}%) | Bounced: {7} ({8}%)" -f `
    $Summary.unique_scheduled, $Summary.unique_delivered, $Summary.delivery_rate_pct, `
    $Summary.unique_opened, $Summary.open_rate_pct, `
    $Summary.unique_replied, $Summary.reply_rate_pct, `
    $Summary.unique_bounced, $Summary.bounce_rate_pct)
