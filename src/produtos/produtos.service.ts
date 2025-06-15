import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutosService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto){
        switch (createProductDto.categoriaName) {
            case 'Pizza':  createProductDto.categoriaId = 1  
            break;
            case 'Pastel' : createProductDto.categoriaId = 2
            break
            default: ''
        }

        return await this.prisma.produtos.create({
            data: {
                nome: createProductDto.nome,
                imagem: createProductDto.imagem ?? '',
                preco: createProductDto.preco,
                descricao: createProductDto.descricao,
                categoriaId: createProductDto.categoriaId
            }
        })
    }

    async delete(id: number){
        return await this.prisma.produtos.delete({
            where: {
                id: id
            }
        })
    }

    async findOne(id: number){
        return await this.prisma.produtos.findUnique({
            where: {
                id: id
            },
            include: {
                categoria: true
            }
        })
    }
}
