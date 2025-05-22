import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product-dto';

@Injectable()
export class ProdutosService {
    constructor(private readonly prisma: PrismaService){}

    async create(createProductDto: CreateProductDto){
        switch (createProductDto.categoriaName) {
            case 'Pizza': createProductDto.categoriaId = 1    
            break;
            case 'Fast-Food' : createProductDto.categoriaId = 2
            break;
            default : 0
        }

        return await this.prisma.produtos.create({
            data: {
                image: createProductDto.imagem,
                nome: createProductDto.nome,
                preco: createProductDto.preco,
                descricao: createProductDto.descricao,
                categoriaId: createProductDto.categoriaId
            }
        })
    }

    async delete(id: number){
        return await this.prisma.produtos.delete({where: {id}})
    }

    async findOne(id: number){
        return await this.prisma.produtos.findUnique({where: {id}})
    }
}
