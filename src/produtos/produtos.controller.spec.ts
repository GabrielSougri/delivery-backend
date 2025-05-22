import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('ProdutosController', () => {
  let controller: ProdutosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProdutosService],
      controllers: [ProdutosController],
    }).compile();

    controller = module.get<ProdutosController>(ProdutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
