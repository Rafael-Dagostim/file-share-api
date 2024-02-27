import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilePackageEntity } from './entities/file-package.entity';
import { FilePackageService } from './file-package.service';
import { FilePackageCreateDto } from './dto/file-package-create.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('file-package')
@ApiTags('File Package')
export class FilePackageController {
  public constructor(private readonly filePackageService: FilePackageService) {}

  @Get()
  public findAll(): Promise<FilePackageEntity[]> {
    return this.filePackageService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<FilePackageEntity> {
    return this.filePackageService.findOne(id);
  }

  @Post()
  public create(@Body() dto: FilePackageCreateDto): Promise<FilePackageEntity> {
    return this.filePackageService.create(dto);
  }
}
