import { Injectable } from '@nestjs/common';
import { CategoriasRepository } from './categorias.repository';

@Injectable()
export class CategoriasService {
    constructor(private readonly categoriasRepository: CategoriasRepository) {}

    findAll(){
        return this.categoriasRepository.findAll()
    }

    findOne(id: number){
        return this.categoriasRepository.findOne(id)
    }
}
