import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [ProdutosModule, PrismaModule, CategoriasModule]
})
export class AppModule {}
