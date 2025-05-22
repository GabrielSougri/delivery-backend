import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CreateProductDto } from './dto/create-product-dto';
import { Produto } from './types/produto.type';

describe('ProdutosController', () => {
  let controller: ProdutosController;

  const data: CreateProductDto = {
    nome: 'Quatro queijos',
    preco: 72.32,
    descricao: 'feita com quatro queijos',
    categoriaName: 'Pizza'
  }

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

  it('esperado que o produto venha definido ao ser cadastrado', () => {
      expect(controller.create(data)).toBeDefined()
    })
  
    it('esperado que o produto seja uma promise do tipo Produtos ao ser cadastrado', () => {
      expect(controller.create(data)).toBeInstanceOf(Promise<Produto>)
    })
  
    it('esperado que a lista de produtos retornada seja definida', () => {
      expect(controller.findOne('1')).toBeDefined()
    })
  
    it('esperado que o produto retornado seja uma promise do tipo Produtos & Categoria', () => {
      expect(controller.findOne('1')).toBeInstanceOf(Promise<({
          categoria: {
          id: number;
          nome: string;
          } | null;
        } & {
          id: number;
          image: string | null;
          nome: string;
          preco: number;
          descricao: string;
          categoriaId: number;
        }) | null>)
      }
    )
  
    it('esperado que o produto deletado seja definido', () => {
      expect(controller.delete('1')).toBeDefined()
    })
  
    it('esperado que o produto deletado seja uma promese do tipo Produto', () => {
      expect(controller.delete('1')).toBeInstanceOf(Promise<Produto>)
    })
});
