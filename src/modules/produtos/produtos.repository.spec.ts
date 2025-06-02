import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosRepository } from './produtos.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateProductDto } from './dto/create-product-dto';
import { Produtos } from '../../types/produtos';
import { Categorias } from '../../types/categorias';

describe('ProdutosService', () => {
  let repository: ProdutosRepository;

  const produto: CreateProductDto = {
    nome: 'quatro queijos',
    preco: 73.32,
    descricao: 'feita de quatro queijos',
    categoriaId: 1
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProdutosRepository],
    }).compile();

    repository = module.get<ProdutosRepository>(ProdutosRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  //teste de definição de retorno
  it('esperado que o produto venha definido ao ser cadastrado', () => {
    expect(repository.create(produto)).toBeDefined()
  })

  it('esperado que o produto venha definido ao ser deletado', () => {
    expect(repository.delete(1)).toBeDefined()
  })

  it('esperado que o produto venha definido ao ser buscado por id', () => {
    expect(repository.findOne(1)).toBeDefined()
  })

  // teste de tipagem
  it('esperado que o produto retorne uma promise com o tipo Produtos ao ser cadastrado', () => {
    expect(repository.create(produto)).toBeInstanceOf(Promise<Produtos>)
  })

  it('esperado que o produto retorne uma promise com o tipo Produtos ao ser deletado', () => {
    expect(repository.delete(1)).toBeInstanceOf(Promise<Produtos>)
  })

  it('esperado que o produto retorne uma promise com o tipo (Produtos join Categorias) ao ser buscado por id', () => {
    expect(repository.findOne(1)).toBeInstanceOf(Promise<((Categorias | null) & Produtos) | null>)
  })

  // teste de erro de retorno
  it('esperado que o produto seja nulo ao ser retornado por id', () => {
    expect(repository.findOne(7)).toBeInstanceOf(Promise<null>)
  })
});
