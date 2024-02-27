import { DocumentBaseEntity } from './../../../shared/classes/document-base.entity';
import {
  FilePackage,
  FileMetadata,
  FilePackageOptions,
  FilePackageMetadata,
  User,
} from '@prisma/client';

export class FilePackageEntity extends DocumentBaseEntity implements FilePackage {
  /**
   * User identifier.
   */
  public userId: string | null;

  /**
   * User Object
   */
  public user: User | null;

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

  public constructor(partial: Partial<FilePackageEntity>) {
    super(partial);
    Object.assign(this, partial);
  }
}
