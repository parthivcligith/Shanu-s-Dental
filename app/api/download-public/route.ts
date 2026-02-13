import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';
import { Readable } from 'stream';
import archiver from 'archiver';

export async function GET(request: NextRequest) {
  try {
    const publicDir = join(process.cwd(), 'public');

    // Create a readable stream that will be sent to the client
    const readable = new Readable({
      read() {},
    });

    // Create the archiver instance
    const archive = archiver('zip', {
      zlib: { level: 9 }, // Maximum compression
    });

    // Handle archive errors
    archive.on('error', (error) => {
      console.error('[v0] Archive error:', error);
      readable.destroy(error);
    });

    // Pipe the archive to the readable stream
    archive.pipe(readable);

    // Add the public directory to the archive
    archive.directory(publicDir, 'public');

    // Finalize the archive
    archive.finalize().catch((error) => {
      console.error('[v0] Archive finalization error:', error);
      readable.destroy(error);
    });

    // Return the stream as response
    return new NextResponse(readable as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="feza-mattresses-assets.zip"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('[v0] Download error:', error);
    return NextResponse.json(
      { error: 'Failed to create zip file' },
      { status: 500 }
    );
  }
}
