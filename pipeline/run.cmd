@echo off
rem Wrapper for Windows Task Scheduler - runs the pipeline from the project root
cd /d "%~dp0.."
node pipeline\run.js
