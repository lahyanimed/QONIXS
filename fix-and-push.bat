@echo off
echo === Suppression du lock file ===
if exist ".git\index.lock" del /f /q ".git\index.lock"

echo === Git add layout.tsx fix ===
git add src/app/layout.tsx

echo === Commit du fix ===
git commit -m "Fix: supprimer accolades dupliquees fin layout.tsx (erreur TS1128)"

echo === Push vers GitHub main ===
git push origin main

echo.
echo === TERMINE ===
pause
