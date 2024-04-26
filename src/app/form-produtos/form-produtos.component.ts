import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoApiService } from '../produto-api.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrl: './form-produtos.component.css'
})
export class FormProdutosComponent {
  produto = new Produto();
  id?:number;
  botaoAcao = "Cadastrar";
  
  constructor(
    private produtoApiService: ProdutoApiService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.id = this.route.snapshot.params['id'];
    if(this.id) {
      this.botaoAcao = "Editar";
      this.produtoApiService.buscarPorId(this.id).subscribe(
        (produto) => this.produto = produto
      );
    }
  }
  
  salvar() {
    if(this.id) {
      this.produtoApiService.editar(this.id, this.produto).subscribe(
        (prod) => {
          alert(`Produto ${this.produto.nome} editado com sucesso!`);
          this.produto = prod;
        } 
      );
    }
    else {
      this.produtoApiService.inserir(this.produto).subscribe(
        (prod) => {
          alert(`Produto ${this.produto.nome} cadastrado com sucesso!`);
          this.produto = new Produto();
        }
      );
    }    
  }

  voltar() {
    this.router.navigate(['/tabela']);
  }
}
