import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProdutosService } from './produtos.service';

describe('ProdutosController', () => {
  let controller: ProdutosController;

  const mockProductService = {
    create: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn()
  }
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [ProdutosController],
      providers: [{provide: ProdutosService, useValue: mockProductService}]
    }).compile();

    controller = module.get<ProdutosController>(ProdutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // teste de create 
  it('esperado criar um produto', async () => {
    const produto = {
      nome: 'Quatro queijos',
      image: '',
      preco: 70.65,
      descricao: 'feita com quatro queijos',
      categoriaName: 'Pizza'
    }

    const productCreated = {
      id: 1, 
      nome: 'Quatro queijos',
      image: '',
      preco: 70.65,
      descricao: 'feita com quatro queijos',
      categoriaId: 1
    }

    mockProductService.create.mockResolvedValue(productCreated)

    const result = await controller.create(produto)

    expect(result).toEqual(productCreated)
    expect(mockProductService.create).toHaveBeenCalledWith(produto)
  })

  // teste de findOne
  it('esperado retornar um produto', async () => {
    const produto = {
      id: 1,
      nome: 'Quatro queijos',
      image: '',
      preco: 70.65,
      descricao: 'feita de quatro queijos',
      categoria: {
        id: 1,
        nome: 'Pizzas'
      }
    }

    mockProductService.findOne.mockResolvedValue(produto)

    const result = await controller.findOne('1')

    expect(result).toEqual(produto)
    expect(mockProductService.findOne).toHaveBeenCalledWith(1)
  })

  // teste de delete
  it('esperado deletar um produto', async () => {
    const produto = {
      nome: 'Quatro queijos',
      image: '',
      preco: 70.65,
      descricao: 'feita com quatro queijos',
      categoriaId: 1
    }

    mockProductService.delete.mockResolvedValue(produto)

    const result = await controller.delete('1')

    expect(result).toEqual(produto)
    expect(mockProductService.delete).toHaveBeenCalledWith(1)
  })
});
