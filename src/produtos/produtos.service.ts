import { Injectable } from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { CreateProductDto } from './dto/create-product-dto';

@Injectable()
export class ProdutosService {
    constructor(private readonly productsRepository: ProdutosRepository) {}

    async create(createProductDto: CreateProductDto){
        switch (createProductDto.categoriaName) {
            case 'Pizza':  createProductDto.categoriaId = 1  
            break;
            case 'Pastel' : createProductDto.categoriaId = 2
            break
            default: ''
        }

        return await this.productsRepository.create(createProductDto)
    }

    async delete(id: number){
        return await this.productsRepository.delete(id)
    }

    async findOne(id: number){
        return await this.productsRepository.findOne(id)
    }
}
