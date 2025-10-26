# Start Website Preview - KK USA LLC

## Quick Start Commands

Open your terminal in the CurveRedo folder and run:

### Option 1: Using the Start Script (Recommended)
```bash
node start.js
```

### Option 2: Using NPM
```bash
npm run dev
```

### Option 3: Using Windows Batch File
```bash
start-windows.bat
```

## What Happens

The development server will start and you'll see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5000/
➜  Network: http://192.168.x.x:5000/
```

## Open in Browser

1. **Automatically**: The browser should open automatically
2. **Manually**: Open your browser and go to:
   - http://localhost:5000/

## What You'll See

Your website with:
- ✅ Logo in the navigation (top left)
- ✅ Company name: Karan Kothari USA LLC
- ✅ Navigation menu (Home, About Us, Projects, Brand Hotels)
- ✅ Hero section with FF&E supplier messaging
- ✅ All pages working

## Available Pages to Preview

Once the server is running, you can visit:

- **Home**: http://localhost:5000/
- **About Us**: http://localhost:5000/about
- **Projects**: http://localhost:5000/portfolio
- **Brand Hotels**: http://localhost:5000/brand-hotels
- **Contact**: http://localhost:5000/contact

## Stop the Server

To stop the preview:
- Press `Ctrl + C` in the terminal
- Or close the terminal window

## Troubleshooting

### Issue 1: "Port 5000 is already in use"
```bash
# The server is already running
# Either:
# 1. Use the existing server
# 2. Or stop it first (Ctrl+C) and restart
```

### Issue 2: "Cannot find module"
```bash
# Install dependencies first
npm install
# Then start
npm run dev
```

### Issue 3: "Command not found"
```bash
# Make sure you're in the CurveRedo folder
cd CurveRedo
# Then run
npm run dev
```

### Issue 4: Logo not showing
```bash
# Hard refresh the browser
# Windows: Ctrl + Shift + R
# Mac: Cmd + Shift + R
```

### Issue 5: Changes not appearing
```bash
# The server auto-reloads, but if not:
# 1. Stop server (Ctrl+C)
# 2. Restart: npm run dev
# 3. Hard refresh browser
```

## Preview Checklist

When the site loads, verify:
- [ ] Logo appears in top left corner
- [ ] Company name "Karan Kothari USA LLC" is visible
- [ ] Navigation menu works
- [ ] Hero section displays correctly
- [ ] All pages are accessible
- [ ] Mobile menu works (resize browser)
- [ ] Dark/light theme toggle works

## Development Features

While previewing:
- ✅ **Hot Reload**: Changes to code update automatically
- ✅ **Fast Refresh**: React components update without full reload
- ✅ **Error Overlay**: Errors show in browser
- ✅ **Console Logs**: Check browser DevTools (F12)

## Browser DevTools

Press F12 to open DevTools and check:
- **Console**: For any JavaScript errors
- **Network**: To verify logo.png loads (should be 200 status)
- **Elements**: To inspect the HTML structure

## Mobile Preview

To test mobile view:
1. Open DevTools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select a mobile device
4. Test the mobile menu

## Performance Check

While previewing, the site should:
- ✅ Load quickly (< 2 seconds)
- ✅ Navigate smoothly between pages
- ✅ Show no console errors
- ✅ Display all images properly

## Next Steps After Preview

If everything looks good:
1. ✅ Logo displays correctly
2. ✅ All pages work
3. ✅ Navigation functions properly
4. ✅ Mobile view works

Then you're ready to:
- Push to GitHub (using the guide)
- Deploy to production (Vercel/Netlify)
- Share with others

## Quick Reference

```bash
# Start preview
npm run dev

# Stop preview
Ctrl + C

# Install dependencies (if needed)
npm install

# Build for production (optional)
npm run build

# Preview production build (optional)
npm run preview
```

## Common URLs

- **Development**: http://localhost:5000/
- **Network Access**: http://192.168.x.x:5000/ (shown in terminal)
- **Production** (after deploy): Your Vercel/Netlify URL

Enjoy previewing your website! 🚀
