import { Controller, Get } from '@nestjs/common';
import { FilePackageEntity } from './entities/file-package.entity';
import { FilePackageService } from './file-package.service';

@Controller('file-package')
export class FilePackageController {
  public constructor(private readonly filePackageService: FilePackageService) {}

  @Get()
  public findAll(): Promise<FilePackageEntity[]> {
    return this.filePackageService.findAll();
  }
}
