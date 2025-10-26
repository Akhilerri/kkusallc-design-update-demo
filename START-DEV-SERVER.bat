@echo off
echo ========================================
echo   Starting Development Server
echo   (Changes will update automatically!)
echo ========================================
echo.
echo Your website will open at:
echo http://localhost:5000
echo.
echo This server shows changes INSTANTLY!
echo No need to rebuild!
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Set environment variables for Windows
set NODE_ENV=development
set DATABASE_URL=file:./dev.db
set PORT=5000
set VITE_BASE_URL=http://localhost:5000

REM Start development server using Node
node start-dev.js

pause
