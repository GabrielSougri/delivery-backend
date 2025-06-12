import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { CreateProductDto } from './dto/create-product-dto';
import { PrismaModule } from '../prisma/prisma.module';
import { ProdutosService } from './produtos.service';
import { ProdutosRepository } from './produtos.repository';

describe('ProdutosController', () => {
  let controller: ProdutosController;

  const produto: CreateProductDto = {
    nome: 'quatro queijos',
    preco: 78.76,
    descricao: 'feita de quatro queijos',
    categoriaId: 1
  }
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [ProdutosService, ProdutosRepository],
      controllers: [ProdutosController],
    }).compile();

    controller = module.get<ProdutosController>(ProdutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('esperado que retorne os dados do produto ao ser cadastrado', async () => {
    expect(await controller.create(produto)).toEqual(
      {
        id: 1,
        nome: 'quatro queijos',
        imagem: '',
        preco: 78.76,
        descricao: 'feita de quatro queijos',
        categoriaId: 1
      }
    )
  })

   it('esperado que retorne os dados do produto ao ser deletado', async () => {
    expect(await controller.findOne('1')).toEqual(
      {
        id: 1,
        nome: 'quatro queijos',
        imagem: '',
        preco: 78.76,
        descricao: 'feita de quatro queijos',
        categoriaId: 1
      }
    )
  })

  it('esperado que retorne os dados do produto ao ser deletado', async () => {
    expect(await controller.delete('1')).toEqual(
      {
        id: 1,
        nome: 'quatro queijos',
        imagem: '',
        preco: 78.76,
        descricao: 'feita de quatro queijos',
        categoriaId: 1
      }
    )
  })
});
