@echo off
cd /d "C:\settatech claude\qonixs"
git add "public/products/RG-EW1200G PRO.png"
git add "public/products/RG-EW3000GX.png"
git add "public/products/RG-EW3000GX PRO.png"
git add src/lib/products.ts
git commit -m "Add Ruijie router product images (local paths)"
git push origin main
pause
