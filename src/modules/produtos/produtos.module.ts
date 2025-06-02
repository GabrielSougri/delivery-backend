import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProdutosRepository } from './produtos.repository';

@Module({
  imports: [PrismaModule],
  providers: [ProdutosRepository, ProdutosService],
  controllers: [ProdutosController]
})
export class ProdutosModule {}
