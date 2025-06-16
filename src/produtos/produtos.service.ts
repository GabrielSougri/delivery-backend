import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product-dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutosService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto){
        let categoriaId = 0
        
        switch (createProductDto.categoriaName) {
            case 'Pizza' : categoriaId = 1; break;
            case 'Pastel' : categoriaId = 2; break
            default: categoriaId = 0
        }

        return await this.prisma.produtos.create({
            data: {
                nome: createProductDto.nome,
                imagem: createProductDto.imagem ?? '',
                preco: createProductDto.preco,
                descricao: createProductDto.descricao,
                categoriaId: categoriaId
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
