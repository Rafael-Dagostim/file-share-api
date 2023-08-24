import { Test, TestingModule } from '@nestjs/testing';
import { FilePackageController } from './file-package.controller';
import { FilePackageService } from './file-package.service';

describe('FilePackageController', () => {
  let controller: FilePackageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilePackageController],
      providers: [FilePackageService],
    }).compile();

    controller = module.get<FilePackageController>(FilePackageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
