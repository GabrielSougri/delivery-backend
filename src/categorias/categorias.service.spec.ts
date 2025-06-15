import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('CategoriasService', () => {
  let service: CategoriasService;

  const mockPrismaService = {
    categorias: {
      findAll: jest.fn(),
      findOne: jest.fn()
    }
  } 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [{provide: CategoriasService, useValue: mockPrismaService}],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('esperado retornar uma lista de categorias', async () => {
    const categorias = [
      {
        id: 1,
        nome: 'Pizzas'
      }
    ]

    mockPrismaService.categorias.findAll.mockResolvedValue(categorias)

    const categories = await service.findAll()

    expect(categories).toBe(categorias)
  })

  it('esperado retornar uma categoria', async () => {
    const categoria = {
      id: 1,
      nome: 'Pizzas'
    }

    mockPrismaService.categorias.findOne.mockResolvedValue(categoria)

    const category = await service.findOne(1)

    expect(category).toBe(categoria)
  })  
});
