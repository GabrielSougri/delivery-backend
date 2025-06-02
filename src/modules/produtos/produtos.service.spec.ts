import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosService } from './produtos.service';
import { CreateProductDto } from './dto/create-product-dto';
import { PrismaModule } from '../prisma/prisma.module';

describe('ProdutosService', () => {
  let service: ProdutosService;

  const produto: CreateProductDto = {
    nome: 'quatro queijos',
    preco: 73.32,
    descricao: 'feita de quatro queijos',
    categoriaNome: 'Pizzas'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProdutosService],
    }).compile();

    service = module.get<ProdutosService>(ProdutosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('esperado que o produto venha definido ao ser cadastrado', () => {
    expect(service.create(produto)).toBeDefined()
  })

   it('esperado que o produto venha definido ao ser deletado', () => {
    expect(service.delete(1)).toBeDefined()
  })

  it('esperado que o produto venha definido ao ser buscado por id', () => {
    expect(service.findOne(1)).toBeDefined()
  })
});
