export class CreateProductDto {
    nome: string
    imagem?: string
    preco: number
    descricao: string
    categoriaId?: number
    categoriaName?: string
}