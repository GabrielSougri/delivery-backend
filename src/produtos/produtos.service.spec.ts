import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosService } from './produtos.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

describe('ProdutosService', () => {
  let service: ProdutosService;

  const mockPrismaService = {
    produtos: {
      findUnique: jest.fn(),
      create: jest.fn(),
      delete: jest.fn()
    }
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [
        ProdutosService,
        {provide: PrismaService, useValue: mockPrismaService}
      ]
    }).compile();

    service = module.get<ProdutosService>(ProdutosService);
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

    mockPrismaService.produtos.create.mockResolvedValue(productCreated)

    const result = await service.create(produto)

    expect(result).toEqual(productCreated)
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

    mockPrismaService.produtos.findUnique.mockResolvedValue(produto)

    const result = await service.findOne(1)

    expect(result).toEqual(produto)
  })

  // teste de delete
  it('esperado deletar um produto', async () => {
    const productDeleted = {
      id: 1, 
      nome: 'Quatro queijos',
      image: '',
      preco: 70.65,
      descricao: 'feita com quatro queijos',
      categoriaId: 1
    }

    jest.spyOn(mockPrismaService.produtos, 'delete').mockResolvedValue(productDeleted)

    const result = await service.delete(1)

    expect(result).toEqual(productDeleted)
  })
});
