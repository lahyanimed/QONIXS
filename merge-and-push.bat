@echo off
cd /d "C:\settatech claude\qonixs"
echo [1] Removing lock and corrupted index...
del /f /q ".git\index.lock" 2>nul
del /f /q ".git\index" 2>nul
echo [2] Rebuilding index from HEAD...
git reset HEAD > merge-push-result.txt 2>&1
echo [3] Fetching remote...
git fetch origin main >> merge-push-result.txt 2>&1
echo [4] Merging remote into local...
git merge origin/main --no-edit >> merge-push-result.txt 2>&1
echo [5] Pushing...
git push origin main >> merge-push-result.txt 2>&1
echo Exit: %ERRORLEVEL% >> merge-push-result.txt
echo Done. See merge-push-result.txt for details.
type merge-push-result.txt
pause
