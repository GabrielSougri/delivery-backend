import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { CategoriasRepository } from './categorias.repository';
import { PrismaModule } from '../prisma/prisma.module';

describe('CategoriasController', () => {
  let controller: CategoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [CategoriasController],
      providers: [CategoriasService, CategoriasRepository]
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('esperado que seja retornado a lista de categorias com os dados', () => {
    expect(controller.findAll()).toEqual(
      [
        {
          id: 1,
          nome: 'Pizzas'
        }
      ]
    )
  })

  it('esperado que seja retornado a categoria com os dados', () => {
    expect(controller.findOne('1')).toEqual(
      {
        id: 1,
        nome: 'Pizzas'
      }
    )
  })
});
