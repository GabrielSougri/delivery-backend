import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosService } from './produtos.service';
import { CreateProductDto } from './dto/create-product-dto';
import { PrismaModule } from '../prisma/prisma.module';
import { ProdutosRepository } from './produtos.repository';

describe('ProdutosService', () => {
  let service: ProdutosService;

   const produto: CreateProductDto = {
      nome: 'quatro queijos',
      preco: 78.76,
      descricao: 'feita de quatro queijos',
      categoriaId: 1
    }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProdutosService, ProdutosRepository]
    }).compile();

    service = module.get<ProdutosService>(ProdutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('esperado que o produto venha definido ao ser cadastrado', () => {
    expect(service.create(produto)).toBeDefined()
  })

  it('esperado que o produto venha definido ao ser cadastrado', () => {
    expect(service.delete(1)).toBeDefined()
  })

  it('esperado que o produto venha definido ao ser cadastrado', () => {
    expect(service.findOne(1)).toBeDefined()
  })
});
