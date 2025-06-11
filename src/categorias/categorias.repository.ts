import { PrismaService } from "../prisma/prisma.service";

export class CategoriasRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll(){
        return await this.prisma.categorias.findMany()
    }

    async findOne(id: number){
        return await this.prisma.categorias.findUnique({
            where: {
                id: id
            },
            include: {
                produtos: true
            }
        })
    }
}