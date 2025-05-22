import { Controller, Get, Param } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
    constructor(private readonly categories: CategoriasService){}

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.categories.findOne(parseInt(id))
    }

    @Get()
    findAll(){
        return this.categories.findAll()
    }
}
