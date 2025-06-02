import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDto } from "./dto/create-product-dto";
import { Produtos } from "../../types/produtos";
import { Categorias } from "../../types/categorias";

@Injectable()
export class ProdutosRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(CreateProductDto: CreateProductDto): Promise<Produtos>{
        return await this.prisma.produtos.create({
            data: {
                nome: CreateProductDto.nome,
                imagem: CreateProductDto.image ? CreateProductDto.image : '',
                preco: CreateProductDto.preco,
                descricao: CreateProductDto.descricao,
                categoriaId: CreateProductDto.categoriaId
            }
        })
    }

    async delete(id: number): Promise<Produtos>{
        return await this.prisma.produtos.delete(
            {
                where: {
                    id: id
                }
            }
        )
    }

    async findOne(id: number): Promise<((Categorias | null) & Produtos) | null>{
        return await this.prisma.produtos.findUnique(
            {
                where: {
                    id: id
                }, 
                include: {
                    categoria: true
                }
            }
        )
    }
}