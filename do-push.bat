@echo off
cd /d "C:\settatech claude\qonixs"
echo Pushing fix liens menu...
git push origin main > DO-PUSH-result.txt 2>&1
echo Exit: %ERRORLEVEL% >> DO-PUSH-result.txt
type DO-PUSH-result.txt
pause
