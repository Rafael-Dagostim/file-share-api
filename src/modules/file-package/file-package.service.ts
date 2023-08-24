import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FilePackageEntity } from './entities/file-package.entity';

@Injectable()
export class FilePackageService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<FilePackageEntity[]> {
    const packages = await this.prismaService.filePackage.findMany();
    return packages.map((pack) => new FilePackageEntity(pack));
  }
}
