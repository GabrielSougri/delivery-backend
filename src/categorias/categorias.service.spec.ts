import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

describe('CategoriasService', () => {
  let service: CategoriasService;

  const mockPrismaService = {
    categorias: {
      findUnique: jest.fn(),
      findMany: jest.fn()
    }
  } 

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CategoriasService,
        {provide: PrismaService, useValue: mockPrismaService}],
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

    mockPrismaService.categorias.findMany.mockResolvedValue(categorias)

    const categories = await service.findAll()

    expect(categories).toBe(categorias)
  })

  it('esperado retornar uma categoria', async () => {
    const categoria = {
      id: 1,
      nome: 'Pizzas'
    }

    mockPrismaService.categorias.findUnique.mockResolvedValue(categoria)

    const category = await service.findOne(1)

    expect(category).toBe(categoria)
  })  
});
