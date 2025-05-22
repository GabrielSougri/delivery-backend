import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CategoriasService],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
