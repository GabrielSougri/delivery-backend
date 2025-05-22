import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProductDto } from './dto/create-product-dto';

@Controller('produtos')
export class ProdutosController {
    constructor(private readonly products: ProdutosService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto){
        return this.products.create(createProductDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.products.delete(parseInt(id))
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.products.findOne(parseInt(id))
    }
}

