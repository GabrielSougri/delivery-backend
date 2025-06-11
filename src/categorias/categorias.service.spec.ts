import { Test, TestingModule } from '@nestjs/testing';
import { CategoriasService } from './categorias.service';

describe('CategoriasService', () => {
  let service: CategoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriasService],
    }).compile();

    service = module.get<CategoriasService>(CategoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('esperado que a lista de categorias venha definida', () => {
    expect(service.findAll()).toBeDefined()
  })

  it('esperado que a categoria venha definida ao ser buscada por id', () => {
    expect(service.findOne(1))
  })
});
