export type Produtos = {
    id: number;
    nome: string;
    imagem: string | null;
    preco: number;
    descricao: string;
    categoriaId: number;
}