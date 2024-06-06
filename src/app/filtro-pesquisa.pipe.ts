import { Pipe, PipeTransform } from '@angular/core';
import { Livro } from './livro';

@Pipe({
  name: 'filtroPesquisa',
  pure: false
})

export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaLivros: Livro[], nomePesq: string): Livro [] {
    return listaLivros.filter ( (livro:Livro) => {
      return livro.titulo?.toLowerCase().includes(nomePesq.toLowerCase())
    })
  }
}
