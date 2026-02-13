# Public Folder Download Feature

## Overview

The Feza Mattresses website now includes a downloadable public assets feature that allows users to download all files from the `public` folder as a compressed ZIP file.

## Implementation Details

### Files Created

1. **`/app/api/download-public/route.ts`**
   - API endpoint that handles ZIP file creation
   - Uses the `archiver` library for efficient compression
   - Streams the ZIP directly to the client for optimal performance
   - Maximum compression level (9) for smaller file sizes

2. **`/components/download-public-button.tsx`**
   - Client-side download button component
   - Shows loading state while preparing download
   - Displays success state after successful download
   - Responsive design (different text on mobile vs desktop)
   - Error handling with user-friendly messages

3. **`/types/archiver.d.ts`**
   - TypeScript type definitions for the archiver library
   - Ensures proper type safety in the API route

### How It Works

1. **User clicks "Download Assets" button** in the footer under the Resources section
2. **Browser sends GET request** to `/api/download-public`
3. **Server creates a ZIP archive** containing the entire `public` folder
4. **Stream is piped directly** to the client response for efficient memory usage
5. **Browser downloads** `feza-mattresses-assets.zip`
6. **User feedback** shows completion state

## Features

- **Streaming Download**: Uses Node.js streams for memory efficiency
- **Compression**: Maximum compression (level 9) reduces file size
- **Error Handling**: Catches and reports errors gracefully
- **Success Feedback**: Visual indication when download completes
- **Loading State**: Shows progress while preparing the ZIP
- **Mobile Responsive**: Adapts button text for smaller screens
- **Type Safe**: Full TypeScript support with archiver types

## Installation

The required dependency is already added to `package.json`:

```json
{
  "dependencies": {
    "archiver": "^7.0.1"
  }
}
```

Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## API Endpoint

**GET** `/api/download-public`

**Response Headers:**
- `Content-Type`: `application/zip`
- `Content-Disposition`: `attachment; filename="feza-mattresses-assets.zip"`
- `Cache-Control`: `no-cache, no-store, must-revalidate`

**Response**: Binary ZIP file stream

## Usage

### In Components

```tsx
import { DownloadPublicButton } from '@/components/download-public-button';

export function MyComponent() {
  return (
    <div>
      <DownloadPublicButton />
    </div>
  );
}
```

The button is already integrated into the footer component in the "Resources" section.

## Customization

### Change Download Filename

Edit `/app/api/download-public/route.ts`:
```ts
'Content-Disposition': 'attachment; filename="your-filename.zip"',
```

### Change Button Text

Edit `/components/download-public-button.tsx` and update the button label strings.

### Adjust Compression Level

Edit `/app/api/download-public/route.ts`:
```ts
const archive = archiver('zip', {
  zlib: { level: 9 }, // Change 9 to 0-9 (0 = no compression, 9 = max)
});
```

## Performance Considerations

- **Streaming**: Data is streamed directly to the client, not buffered in memory
- **Compression**: Maximum compression reduces transfer size
- **Error Handling**: Proper error handling prevents hanging connections
- **Cleanup**: Resources are properly cleaned up after download

## Troubleshooting

### Download Not Starting

- Check browser console for errors
- Verify the `/public` folder exists and has files
- Clear browser cache and try again

### Large ZIP File

- If the public folder is very large, consider:
  - Excluding certain files/folders
  - Modifying the API to be selective about what gets archived
  - Using lower compression for faster generation

### TypeScript Errors

- Ensure `@types/node` is installed for file system types
- Run `npm install` to install the archiver package

## Example Implementation

The download button is integrated in `/components/footer.tsx` in the "Resources" section:

```tsx
<div className="pt-4 border-t border-border/40">
  <h4 className="font-semibold text-lg mb-4">Resources</h4>
  <DownloadPublicButton />
</div>
```

## Security Notes

- The endpoint only archives the public folder (no sensitive files)
- No authentication required (public assets)
- File names and contents are as they appear in the public folder
- Compression is performed server-side, not exposing internal paths

## Browser Compatibility

Works on all modern browsers supporting:
- Fetch API
- Blob API
- `<a download>` attribute
- Streams API

Tested on:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
