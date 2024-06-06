import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  idGen = 6;
  listaLivros: Livro[] = [
    { id:1, titulo: "Livro 1", preco: 200, autor: 'fulano', dataPublicacao: new Date() },
  ];

  constructor() { }

  private generateId() {
    return this.idGen++;
  }

  listar(): Livro[] {
    return this.listaLivros;
  }
  
  inserir(livro: Livro) {
    livro.id = this.generateId();
    this.listaLivros.push(livro);
  }

  buscarPorId(id: number): Livro {
    const livro = this.listaLivros.find(livro => livro.id == id);
    return livro
      ? Object.assign({}, livro)
      : new Livro();
  }

  editar(id:number, livro: Livro) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaLivros[indice] = livro;
    }    
  }

  deletar(id?:number) {
    const indice = this.getIndice(id);
    if(indice >=0){
      this.listaLivros.splice(indice, 1);
    }
  }

  private getIndice(id?:number) {
    return this.listaLivros.findIndex(livro => livro.id==id);
  }

}
