import { Injectable } from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { CreateProductDto } from './dto/create-product-dto';

@Injectable()
export class ProdutosService {
    constructor(private readonly produtosRepository: ProdutosRepository) {}

    create(CreateProductDto: CreateProductDto){
        switch (CreateProductDto.categoriaNome) {
            case 'Pizzas': CreateProductDto.categoriaId = 1 
            break;
            case 'Pastéis': CreateProductDto.categoriaId = 2        
            default: 0
        }

        return this.produtosRepository.create(CreateProductDto)
    }

    delete(id: number){
        return this.produtosRepository.delete(id)
    }

    findOne(id: number){
        return this.produtosRepository.findOne(id)
    }
}
