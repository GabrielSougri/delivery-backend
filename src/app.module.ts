import { Module } from '@nestjs/common';
import { ProdutosModule } from './modules/produtos/produtos.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CategoriasModule } from './modules/categorias/categorias.module';

@Module({
  imports: [ProdutosModule, PrismaModule, CategoriasModule]
})
export class AppModule {}
