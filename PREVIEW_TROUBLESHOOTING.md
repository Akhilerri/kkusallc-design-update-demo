# Website Preview Troubleshooting Guide

## The Problem
The `npm run dev` command uses `NODE_ENV` which doesn't work properly on Windows.

## ✅ SOLUTION: Use the Windows-Specific Command

Instead of `npm run dev`, use:

```bash
node start.js
```

Or:

```bash
npm run dev:win
```

## Step-by-Step Instructions

### 1. Make Sure You're in the Right Folder
```bash
cd C:\Users\erria\Downloads\CurveHospitality\CurveRedo
```

### 2. Check if Dependencies are Installed
```bash
dir node_modules
```

If you don't see a `node_modules` folder, install dependencies:
```bash
npm install
```

This will take 2-3 minutes.

### 3. Start the Preview
```bash
node start.js
```

### 4. Open Your Browser
The terminal will show:
```
Server running on http://localhost:5000
```

Open your browser and go to: **http://localhost:5000**

## Alternative Methods

### Method 1: Use the Batch File
```bash
start-windows.bat
```

### Method 2: Use the Start Script Directly
```bash
node start-dev.js
```

### Method 3: Manual Start
```bash
npx tsx server/index.ts
```

## Common Issues & Fixes

### Issue 1: "Cannot find module"
**Error**: `Cannot find module 'tsx'` or similar

**Solution**:
```bash
npm install
```

### Issue 2: "Port 5000 already in use"
**Error**: `EADDRINUSE: address already in use :::5000`

**Solution**: Kill the existing process
```bash
# Find what's using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with the number from above)
taskkill /PID <PID> /F

# Or just use a different port - edit .env file
# Change PORT=5000 to PORT=5001
```

### Issue 3: "npm not found"
**Error**: `'npm' is not recognized`

**Solution**: Install Node.js
1. Go to https://nodejs.org
2. Download LTS version
3. Install it
4. Restart your terminal
5. Try again

### Issue 4: Dependencies Not Installing
**Error**: Various errors during `npm install`

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rmdir /s /q node_modules
del package-lock.json

# Reinstall
npm install
```

### Issue 5: "Permission Denied"
**Error**: `EPERM: operation not permitted`

**Solution**: Run terminal as Administrator
1. Right-click PowerShell or CMD
2. Select "Run as Administrator"
3. Navigate to your project folder
4. Try again

### Issue 6: Browser Doesn't Open Automatically
**Solution**: Manually open your browser and go to:
```
http://localhost:5000
```

### Issue 7: Blank Page or Errors in Browser
**Solution**: Check browser console
1. Press F12 to open DevTools
2. Look at Console tab for errors
3. Share the error message with me

## Verify Everything is Working

Once the server starts, you should see:

### In Terminal:
```
✓ Server running on http://localhost:5000
✓ Database connected
✓ Ready to accept connections
```

### In Browser:
- ✅ Logo in top left corner
- ✅ Navigation menu (Home, About Us, Projects, Brand Hotels)
- ✅ Hero section with company information
- ✅ No console errors (press F12 to check)

## Quick Diagnostic Commands

Run these to check your setup:

```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check if you're in the right folder
dir package.json

# Check if dependencies are installed
dir node_modules

# Check current directory
cd
```

## Still Having Issues?

If none of these work, please share:

1. **The exact error message** you're seeing
2. **Your Node.js version**: Run `node --version`
3. **Your current directory**: Run `cd`
4. **What command you ran**: e.g., `npm run dev`

I'll help you fix it!

## Success Checklist

- [ ] In correct folder (CurveRedo)
- [ ] Dependencies installed (node_modules exists)
- [ ] Server starts without errors
- [ ] Browser opens to localhost:5000
- [ ] Website loads with logo visible
- [ ] No console errors in browser

## Next Steps After Preview Works

Once you can see the website:
1. Test all pages (Home, About, Projects, Brand Hotels, Contact)
2. Test mobile view (resize browser or press F12 → device toolbar)
3. Verify logo displays correctly
4. Check that all navigation links work

Then you're ready to push to GitHub and deploy!
