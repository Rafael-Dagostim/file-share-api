import { FileMetadata, FilePackageOptions, FilePackageMetadata } from '@prisma/client';

export class FilePackageCreateDto {
  /**
   * User identifier.
   */
  public userId: string | null;

  /**
   * Param code used on URL to access the file package.
   * @example file-a7qnq
   */
  public param: string;

  /**
   * Files metadata to identify and load files from package.
   */
  public files: FileMetadata[];

  /**
   * Options selected for this file package.
   */
  public options: FilePackageOptions;

  /**
   * Package metadata
   */
  public meta: FilePackageMetadata;

  public constructor(partial: Partial<FilePackageCreateDto>) {
    Object.assign(this, partial);
  }
}
