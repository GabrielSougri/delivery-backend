import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('CategoriasController', () => {
  let controller: CategoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [CategoriasController],
      providers: [CategoriasService]
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('esperado que a lista de categorias buscada seja definida', () => {
    expect(controller.findAll()).toBeDefined()
  })

  it('esperado que a categoria buscada por id seja definida', () => {
    expect(controller.findOne('1')).toBeDefined()
  })
});
