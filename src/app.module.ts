import { Module } from '@nestjs/common';
import { FilePackageModule } from './modules/file-package/file-package.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [FilePackageModule, DatabaseModule],
  providers: [],
  exports: [],
})
export class AppModule {}
