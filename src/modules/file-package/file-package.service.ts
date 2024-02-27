import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FilePackageEntity } from './entities/file-package.entity';
import { FilePackageCreateDto } from './dto/file-package-create.dto';

@Injectable()
export class FilePackageService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findAll(): Promise<FilePackageEntity[]> {
    const filePackages = await this.prismaService.filePackage.findMany();
    return filePackages.map((pack) => new FilePackageEntity(pack));
  }

  public async findOne(id: string): Promise<FilePackageEntity> {
    const filePackage = await this.prismaService.filePackage.findUniqueOrThrow({ where: { id } });
    return new FilePackageEntity(filePackage);
  }

  public async create(dto: FilePackageCreateDto): Promise<FilePackageEntity> {
    const filePackage = await this.prismaService.filePackage.create({ data: dto });
    return new FilePackageEntity(filePackage);
  }
}
