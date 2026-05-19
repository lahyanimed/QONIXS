@echo off
cd /d "C:\settatech claude\qonixs"
git pull --rebase origin main > push-result.txt 2>&1
git push origin main >> push-result.txt 2>&1
echo Exit: %ERRORLEVEL% >> push-result.txt
