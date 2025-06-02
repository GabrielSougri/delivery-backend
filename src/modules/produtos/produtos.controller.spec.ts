import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProdutosRepository } from './produtos.repository';
import { ProdutosService } from './produtos.service';
import { CreateProductDto } from './dto/create-product-dto';

describe('ProdutosController', () => {
  let controller: ProdutosController;

  const produto: CreateProductDto = {
      nome: 'quatro queijos',
      preco: 73.32,
      descricao: 'feita de quatro queijos',
      categoriaNome: 'Pizzas'
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProdutosRepository, ProdutosService],
      controllers: [ProdutosController],
    }).compile();

    controller = module.get<ProdutosController>(ProdutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('esperado que o produto venha definido ao ser cadastrado', () => {
    expect(controller.create(produto)).toBeDefined()
  })

   it('esperado que o produto venha definido ao ser deletado', () => {
    expect(controller.delete('1')).toBeDefined()
  })

  it('esperado que o produto venha definido ao ser buscado por id', () => {
    expect(controller.findOne('1')).toBeDefined()
  })
});
