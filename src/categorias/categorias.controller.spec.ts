import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('CategoriasController', () => {
  let controller: CategoriasController;
  
  const mockCategoryService = {
    findAll: jest.fn(),
    findUnique: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [CategoriasController],
      providers: [{provide: CategoriasService, useValue: mockCategoryService}]
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // tesde de findAll
  it('esperado retornar uma lista de categorias', async () => {
    const categorias = [
      {
        id: 1,
        nome: 'Pizzas'
      }
    ]

    mockCategoryService.findAll.mockResolvedValue(categorias)

    const categories = await controller.findAll()

    expect(categories).toEqual(categorias)
    expect(mockCategoryService.findAll).toHaveBeenCalledWith()
  })

  // teste de findOne
  it('esperado retornar uma categoria', async () => {
    const categoria = {
      id: 1,
      nome: 'Pizzas'
    }

    mockCategoryService.findUnique.mockResolvedValue(categoria)

    const category = await controller.findOne('1')

    expect(category).toEqual(categoria)
    expect(mockCategoryService.findUnique).toHaveBeenCalledWith({
      where: 1
    })
  })
});
