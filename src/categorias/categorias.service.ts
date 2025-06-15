import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
    constructor(private readonly prisma: PrismaService) {}

    findAll(){
        return this.prisma.categorias.findMany()
    }

    findOne(id: number){
        return this.prisma.categorias.findUnique({
            where: {
                id: id
            }
        })
    }
}
