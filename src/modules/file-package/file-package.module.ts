import { Module } from '@nestjs/common';
import { FilePackageService } from './file-package.service';
import { FilePackageController } from './file-package.controller';

@Module({
  controllers: [FilePackageController],
  providers: [FilePackageService]
})
export class FilePackageModule {}
