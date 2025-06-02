export class CreateProductDto {
    nome: string
    image?: string
    preco: number
    descricao: string
    categoriaNome?: string
    categoriaId?: number
}