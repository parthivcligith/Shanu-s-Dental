'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Check, AlertCircle } from 'lucide-react';

export function DownloadPublicButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      setError(null);

      console.log('[v0] Starting download request');
      const response = await fetch('/api/download-public', {
        method: 'GET',
        headers: {
          'Accept': 'application/zip',
        },
      });

      console.log('[v0] Download response status:', response.status);
      console.log('[v0] Content-Type:', response.headers.get('content-type'));
      console.log('[v0] Content-Length:', response.headers.get('content-length'));

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.details || `Server error: ${response.status} ${response.statusText}`
        );
      }

      // Get the blob from the response
      const blob = await response.blob();
      console.log('[v0] Blob received, size:', blob.size, 'bytes');

      if (blob.size === 0) {
        throw new Error('Downloaded file is empty. The public folder may not have any files.');
      }

      if (blob.type !== 'application/zip') {
        console.warn('[v0] Unexpected blob type:', blob.type);
      }

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'feza-mattresses-assets.zip';
      document.body.appendChild(link);
      link.click();

      // Clean up after a small delay to ensure download starts
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }, 100);

      // Show success state
      console.log('[v0] Download completed successfully');
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to download files. Please try again.';
      console.error('[v0] Download error:', err);
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button
        onClick={handleDownload}
        disabled={isLoading || isSuccess}
        className="gap-2 w-full"
        variant="outline"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="hidden sm:inline">Creating archive...</span>
            <span className="sm:hidden">Processing...</span>
          </>
        ) : isSuccess ? (
          <>
            <Check className="h-4 w-4" />
            Downloaded successfully!
          </>
        ) : (
          <>
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download Assets</span>
            <span className="sm:hidden">Download</span>
          </>
        )}
      </Button>
      {error && (
        <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 p-2 rounded">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
