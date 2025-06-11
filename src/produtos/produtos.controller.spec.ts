import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { CreateProductDto } from './dto/create-product-dto';

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
      controllers: [ProdutosController],
    }).compile();

    controller = module.get<ProdutosController>(ProdutosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('esperado que retorne os dados do produto ao ser cadastrado', () => {
    expect(controller.create(produto)).toEqual(
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

   it('esperado que retorne os dados do produto ao ser deletado', () => {
    expect(controller.findOne('1')).toEqual(
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

  it('esperado que retorne os dados do produto ao ser deletado', () => {
    expect(controller.delete('1')).toEqual(
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
