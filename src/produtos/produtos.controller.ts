import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProductDto } from './dto/create-product-dto';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly produtosService: ProdutosService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto){
        return this.produtosService.create(createProductDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.produtosService.delete(parseInt(id))
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.produtosService.findOne(parseInt(id))
    }
}
