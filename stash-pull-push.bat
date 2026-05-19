@echo off
cd /d "C:\settatech claude\qonixs"
git stash > push-result.txt 2>&1
git pull --rebase origin main >> push-result.txt 2>&1
git push origin main >> push-result.txt 2>&1
git stash pop >> push-result.txt 2>&1
echo Exit: %ERRORLEVEL% >> push-result.txt
