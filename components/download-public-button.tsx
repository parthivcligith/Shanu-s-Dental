'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Check } from 'lucide-react';

export function DownloadPublicButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      setIsSuccess(false);

      const response = await fetch('/api/download-public');

      if (!response.ok) {
        throw new Error(`Failed to download: ${response.statusText}`);
      }

      // Get the blob from the response
      const blob = await response.blob();

      if (blob.size === 0) {
        throw new Error('Downloaded file is empty');
      }

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'feza-mattresses-assets.zip';
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Show success state
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('[v0] Download error:', error);
      alert(error instanceof Error ? error.message : 'Failed to download files. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isLoading || isSuccess}
      className="gap-2 w-full"
      variant="outline"
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="hidden sm:inline">Preparing download...</span>
          <span className="sm:hidden">Downloading...</span>
        </>
      ) : isSuccess ? (
        <>
          <Check className="h-4 w-4" />
          Download complete!
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Download Assets</span>
          <span className="sm:hidden">Download</span>
        </>
      )}
    </Button>
  );
}
