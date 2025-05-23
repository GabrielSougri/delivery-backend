import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
    constructor(private readonly prisma: PrismaService) {}

    async findOne(id: number){
        return await this.prisma.categorias.findUnique({where: {id}})
    }

    async findAll(){
        return await this.prisma.categorias.findMany()
    }
}
