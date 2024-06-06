import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLivrosComponent } from './form-livros/form-livros.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabelaLivrosComponent } from './tabela-livros/tabela-livros.component';

const routes: Routes = [
  { path: 'tabela', component: TabelaLivrosComponent },
  { path: 'novo', component: FormLivrosComponent },
  { path: 'edit/:id', component: FormLivrosComponent },
  { path: '', redirectTo: '/tabela', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
