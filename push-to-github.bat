@echo off
echo === Suppression du lock file ===
if exist ".git\index.lock" del /f /q ".git\index.lock"

echo === Configuration git ===
git config user.email "settatech@gmail.com"
git config user.name "Mohammed Lahyani"

echo === Ajout de tous les fichiers ===
git add -A

echo === Commit ===
git commit -m "SEO complet: robots.txt, schemas JSON-LD, pages contact/blog/FAQ, sitemap.ts, llms.txt, categories metadata"

echo === Ajout remote origin (si pas encore fait) ===
git remote remove origin 2>nul
git remote add origin https://github.com/lahyanimed/QONIXS.git

echo === Fetch origine ===
git fetch origin

echo === Merge avec main (historiques differents) ===
git checkout -B main
git merge origin/main --allow-unrelated-histories --no-edit --strategy-option=ours

echo === Push vers GitHub ===
git push -u origin main --force

echo.
echo === TERMINE ===
pause
