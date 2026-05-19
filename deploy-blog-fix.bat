@echo off
echo === Installation @tailwindcss/typography ===
call npm install @tailwindcss/typography --save-dev

echo.
echo === Suppression index.lock si present ===
if exist ".git\index.lock" del /f /q ".git\index.lock"

echo.
echo === Git add des fichiers blog ===
git add src/lib/blog.ts
git add src/app/blog/page.tsx
git add "src/app/blog/[slug]/page.tsx"
git add tailwind.config.ts
git add package.json
git add package-lock.json

echo.
echo === Commit ===
git commit -m "feat: blog complet - articles accessibles, photos Unsplash, typography plugin"

echo.
echo === Push vers GitHub main ===
git push origin main

echo.
echo === TERMINE — Netlify va deployer automatiquement ===
pause
