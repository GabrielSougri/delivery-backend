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

  it('esperado que a categoria seja definida ao pegar a lista', () => {
    expect(service.findAll()).toBeDefined()
  })

  it('esperado que a categoria seja definida ao buscada por id', () => {
    expect(service.findOne(1)).toBeDefined()
  })
});
