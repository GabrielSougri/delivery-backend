import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaModule } from '../prisma/prisma.module';
import { Categorias } from '../../types/categorias';
import { Produtos } from '../../types/produtos';

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

  it('esperado que seja retornado um array de uma promise do tipo categoria', () => {
    expect(service.findAll()).toBeInstanceOf(Promise<Categorias[]>)
  })

  it('esperado que seja retornado uma promise do tipo (Categoria join Produtos[])', () => {
    expect(service.findOne(1)).toBeInstanceOf(Promise<(Produtos[] & Categorias) | null>)
  })

  it('esperado que a categoria buscada por id seja nula', () => {
    expect(service.findOne(3)).toBeInstanceOf(Promise<null>)
  })
});
