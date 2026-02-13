declare module 'archiver' {
  import { Stream } from 'stream';

  interface ArchiverOptions {
    zlib?: {
      level?: number;
    };
  }

  function archiver(format: string, options?: ArchiverOptions): Archiver;

  interface Archiver extends Stream {
    directory(source: string, dest: string): Archiver;
    finalize(): Promise<void>;
    pipe(destination: NodeJS.WritableStream): void;
  }

  export = archiver;
}
