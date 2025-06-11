import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosRepository } from './produtos.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateProductDto } from './dto/create-product-dto';
import { Produto } from './types/produto';
import { Categoria } from './types/categoria';

describe('ProdutosRepository', () => {
  let repository: ProdutosRepository;

  const produto: CreateProductDto = {
    nome: 'quatro queijos',
    preco: 78.76,
    descricao: 'feita de quatro queijos',
    categoriaId: 1
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProdutosRepository]
    }).compile();

    repository = module.get<ProdutosRepository>(ProdutosRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('esperado que seja retornado uma promise do tipo Produto quando o produto for inserido', () => {
    expect(repository.create(produto)).toBeInstanceOf(Promise<Produto>)
  })

  it('esperado que seja retornado uma promise do tipo Produto quando o produto for deletado', () => {
    expect(repository.delete(1)).toBeInstanceOf(Promise<Produto>)
  })

   it('esperado que seja retornado uma promise do tipo Produto & Categoria quando o produto for buscado por id', () => {
    expect(repository.findOne(1)).toBeInstanceOf(Promise<(Categoria | null & Produto) | null>)
  })
});
