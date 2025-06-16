import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);

    await service.$connect()
  });

  afterAll(async () => {
    await service.$disconnect()
  })

  beforeEach(async () => {
    await service.produtos.deleteMany()
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // operações de produtos
  it('esperado criar e recuperar um produto', async () => {
    const createProduct = await service.produtos.create({
      data: {
        nome: 'Quatro queijos',
        imagem: '',
        preco: 70.65,
        descricao: 'feita de quatro queijos',
        categoriaId: 1
      }
    })

    const product = await service.produtos.findUnique({
      where: {id: createProduct.id}
    })

    expect(product).toBeDefined()
    expect(product?.nome).toBe('Quatro queijos')
  })

  it('esperado retornar um produto', async () => {
    const createProduct = await service.produtos.create({
    data: {
      nome: 'Quatro queijos',
      imagem: '',
      preco: 70.65,
      descricao: 'feita de quatro queijos',
      categoriaId: 1
    }
  })

  const productFound = await service.produtos.findUnique({
      where: {
        id: createProduct.id
      }
    })

    expect(productFound).toBeDefined()
    expect(productFound?.nome).toBe('Quatro queijos')
  })

  it('esperado deletar um produto', async () => {
    const createProduct = await service.produtos.create({
      data: {
        nome: 'Quatro queijos',
        imagem: '',
        preco: 70.65,
        descricao: 'feita de quatro queijos',
        categoriaId: 1
      }
    })
    const productDeleted = await service.produtos.delete({
      where: {
        id: createProduct.id
      }
    })

    expect(productDeleted).toBeDefined()
    expect(productDeleted.nome).toBe('Quatro queijos')
  })

  // operações de categorias
  it('esperado retornar a lista de categorias', async () => {
    const categorias = await service.categorias.findMany()
    expect(categorias).toBeDefined()
    expect(categorias.length).toBe(1)
  })

  it('esperado retornar uma categoria', async () => {
    const categoriaFound = await service.categorias.findUnique({
      where: {
        id: 1
      }
    })

    expect(categoriaFound).toBeDefined()
    expect(categoriaFound?.nome).toBe('Pizzas')
  })
});
