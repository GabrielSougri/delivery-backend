import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriasModule } from './categorias/categorias.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [PrismaModule, CategoriasModule, ProdutosModule]
})
export class AppModule {}
