import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasRepository } from './categorias.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { Categoria } from './types/categoria';
import { Produto } from '../produtos/types/produto';

describe('CategoriasService', () => {
  let repository: CategoriasRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CategoriasRepository],
    }).compile();

    repository = module.get<CategoriasRepository>(CategoriasRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('esperado que retorne uma promise do tipo categorias[]', () => {
    expect(repository.findAll()).toBeInstanceOf(Promise<Categoria[]>)
  })

  it('esperado que retorne uma promise do tipo produtos & categoria', () => {
    expect(repository.findOne(1)).toBeInstanceOf(Promise<(Produto[] & Categoria) | null>)
  })
});
