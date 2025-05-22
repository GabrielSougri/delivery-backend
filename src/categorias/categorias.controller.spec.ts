import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasController } from './categorias.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoriasService } from './categorias.service';

describe('CategoriasController', () => {
  let controller: CategoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [CategoriasService],
      controllers: [CategoriasController],
    }).compile();

    controller = module.get<CategoriasController>(CategoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  
  it('esperado que a categoria seja definida ao pegar a lista', () => {
    expect(controller.findAll()).toBeDefined()
  })

  it('esperado que a categoria seja definida ao buscada por id', () => {
    expect(controller.findOne('1')).toBeDefined()
  })
});
