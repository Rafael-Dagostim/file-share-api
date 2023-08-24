import {
  FileMetadata,
  FilePackageOptions,
  FilePackageMetadata,
} from '@prisma/client';

export class CreateFilePackageDto {
  public userId: string | null;
  public param: string;
  public files: FileMetadata[];
  public options: FilePackageOptions;
  public meta: FilePackageMetadata;

  public constructor(partial: Partial<CreateFilePackageDto>) {
    Object.assign(this, partial);
  }
}
