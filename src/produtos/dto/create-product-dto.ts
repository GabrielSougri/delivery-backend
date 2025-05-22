export class CreateProductDto{
    imagem?: string
    nome: string
    preco: number
    descricao: string
    categoriaName: string
    categoriaId?: number
}