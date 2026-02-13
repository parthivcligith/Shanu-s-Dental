# Download Feature - Debugging Guide

## Problem: "Preparing Download" stays stuck

If the download button shows "Creating archive..." and never completes, follow these debugging steps:

## Step 1: Check Browser Console

1. Open DevTools (F12 or right-click → Inspect)
2. Go to the Console tab
3. Click the "Download Assets" button
4. Look for `[v0]` prefixed console logs

You should see:
```
[v0] Starting download request
[v0] Download response status: 200
[v0] Content-Type: application/zip
[v0] Content-Length: <some number>
[v0] Blob received, size: <some number> bytes
[v0] Download completed successfully
```

## Step 2: Check Network Tab

1. Open DevTools → Network tab
2. Click "Download Assets"
3. Look for the `download-public` request
4. Check:
   - Status should be `200`
   - Content-Type should be `application/zip`
   - Size should be > 0 bytes

## Step 3: Verify API Works

Open this URL directly in your browser:
```
http://localhost:3000/api/download-public
```

This should trigger a download of `feza-mattresses-assets.zip`

## Step 4: Check Public Folder

Verify files exist in the public folder:
```bash
ls -la public/
ls -la public/images/
```

Should show files like:
- `public/README.md`
- `public/images/README.md`
- `public/images/cloud-mattress-bg.jpg`
- `public/images/feza-logo.png`

## Step 5: Check Server Logs

Look for any errors from the API route:
- `[v0] Archive error:`
- `[v0] Download error:`
- `[v0] Archive finalization error:`

## Solution Checklist

- [ ] Public folder has files (not empty)
- [ ] API response status is 200
- [ ] Blob size is > 0 bytes
- [ ] No console errors
- [ ] Browser allows file downloads
- [ ] archiver package is installed

## Adding More Files to Public Folder

The more files you add, the larger the ZIP:

```bash
# Add image files
cp /path/to/image.jpg public/images/

# Add brand assets
cp /path/to/logo.svg public/images/

# Files will be automatically included in ZIP
```

## Expected Download Flow

1. User clicks "Download Assets" button
2. Button changes to "Creating archive..." with spinner
3. Frontend sends GET request to `/api/download-public`
4. API reads public folder contents
5. API compresses files into ZIP format (archiver)
6. API streams ZIP to browser
7. Browser receives blob and triggers download
8. Button changes to "Downloaded successfully!" (green checkmark)
9. File appears in Downloads folder as `feza-mattresses-assets.zip`
