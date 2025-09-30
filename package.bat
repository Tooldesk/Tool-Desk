@echo off
echo 📦 Packaging MultiTools...

REM Create package directory
if exist "MultiTools-Package" rmdir /s /q "MultiTools-Package"
mkdir "MultiTools-Package"

REM Copy files
copy "index.html" "MultiTools-Package\"
copy "about.html" "MultiTools-Package\"
copy "contact.html" "MultiTools-Package\"
copy "privacy.html" "MultiTools-Package\"
copy "disclaimer.html" "MultiTools-Package\"
copy "README.md" "MultiTools-Package\"
copy "TEST_PLAN.md" "MultiTools-Package\"

REM Copy directories
xcopy "css" "MultiTools-Package\css\" /e /i
xcopy "js" "MultiTools-Package\js\" /e /i

echo ✅ Package created: MultiTools-Package/
echo 🎉 Packaging complete!
echo.
echo 📋 Package contents:
echo - index.html (Home page)
echo - about.html (About page)
echo - contact.html (Contact page)
echo - privacy.html (Privacy policy)
echo - disclaimer.html (Disclaimer)
echo - css/styles.css (Main stylesheet)
echo - js/scripts.js (Main JavaScript)
echo - js/tools/ (Individual tool modules)
echo - README.md (Documentation)
echo - TEST_PLAN.md (Testing guide)
echo.
echo 🚀 To use: Open index.html in a web browser
pause
