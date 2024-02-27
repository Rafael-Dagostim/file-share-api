import { Test, TestingModule } from '@nestjs/testing';
import { FilePackageService } from '../file-package.service';

describe('FilePackageService', () => {
  let service: FilePackageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilePackageService],
    }).compile();

    service = module.get<FilePackageService>(FilePackageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
