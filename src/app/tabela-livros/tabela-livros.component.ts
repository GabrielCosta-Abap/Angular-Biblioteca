import { Component, Input } from '@angular/core';
import { Livro } from '../livro';
import { LivroApiService } from '../livro-api.service';

@Component({
  selector: 'app-tabela-livros',
  templateUrl: './tabela-livros.component.html',
  styleUrl: './tabela-livros.component.css'
})
export class TabelaLivrosComponent {
  @Input() title= "Tabela de Livros";
  listaLivros: Livro[] = [];
  nomePesquisado= "";

  constructor(private livroApiService: LivroApiService) {    
      this.listar();
  }

  listar() {
    this.livroApiService.listar().subscribe(
      (livros) => {
        this.listaLivros = livros;
      }
    );
  }

  deletar(id?:number) {
    this.livroApiService.deletar(id!).subscribe(
      (livro) => {
        alert(`Livro deletado com sucesso!`);   
        this.listar();     
      }
    )
  }
}
