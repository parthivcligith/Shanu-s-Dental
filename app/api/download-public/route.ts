import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { existsSync, readdirSync } from 'fs';
import archiver from 'archiver';

export async function GET(request: NextRequest) {
  try {
    console.log('[v0] Download request started');
    const publicDir = join(process.cwd(), 'public');
    console.log('[v0] Public directory:', publicDir);
    
    // Check if public directory exists
    if (!existsSync(publicDir)) {
      console.error('[v0] Public directory does not exist:', publicDir);
      return NextResponse.json(
        { error: 'Public directory not found', details: `Path: ${publicDir}` },
        { status: 404 }
      );
    }

    // List directory contents
    const contents = readdirSync(publicDir, { recursive: true, withFileTypes: false });
    console.log('[v0] Public directory contents:', contents);
    console.log('[v0] Total files in public folder:', contents.length);

    if (contents.length === 0) {
      console.warn('[v0] Warning: Public folder is empty');
    }

    // Create the archiver instance
    const archive = archiver('zip', {
      zlib: { level: 6 }, // Balanced compression
    });

    let archiveSize = 0;
    let fileCount = 0;

    // Create error handlers
    const handleError = (error: any) => {
      console.error('[v0] Stream error:', error);
    };

    archive.on('error', handleError);
    archive.on('warning', (error) => {
      if (error.code === 'ENOENT') {
        console.warn('[v0] Archive warning - file not found:', error);
      } else {
        console.warn('[v0] Archive warning:', error);
      }
    });

    archive.on('entry', (entry) => {
      fileCount++;
      console.log('[v0] Added to archive:', entry.name);
    });

    archive.on('finish', () => {
      archiveSize = archive.pointer();
      console.log('[v0] Archive finished, size:', archiveSize, 'bytes, files:', fileCount);
    });

    // Create response with archive stream
    const response = new NextResponse(
      archive as any,
      {
        status: 200,
        headers: {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename="feza-mattresses-assets.zip"',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Archive-Size': 'unknown', // Will be set after finalize
        },
      }
    );

    // Add the public directory to the archive
    console.log('[v0] Adding public directory to archive');
    archive.directory(publicDir, 'public');

    // Finalize the archive
    console.log('[v0] Finalizing archive');
    await archive.finalize();

    console.log('[v0] Download prepared successfully');
    return response;
  } catch (error) {
    console.error('[v0] Download error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to create zip file',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
