import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoriasRepository } from './categorias.repository';

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CategoriasService, CategoriasRepository],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('esperado que a lista de categorias venha definida', () => {
    expect(service.findAll()).toBeDefined()
  })

  it('esperado que a categoria venha definida ao ser buscada por id', () => {
    expect(service.findOne(1))
  })
});
