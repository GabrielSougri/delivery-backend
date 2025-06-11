import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product-dto";

@Injectable()
export class ProdutosRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(createProductDto: CreateProductDto){
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