import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClusterComponent } from './pages/cluster/cluster.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TableComponent } from './pages/table/table.component';

export enum AppRoutes {
  Painel = 'painel',
  Formulários = 'forms',
  Tabelas = 'tabelas'
}

const routes: Routes = [
  {
    path: AppRoutes.Painel,
    component: ClusterComponent
  },
  {
    path: AppRoutes.Formulários,
    component: FormsComponent
  },
  {
    path: AppRoutes.Tabelas,
    component: TableComponent
  },
  {
    path: '**',
    redirectTo: 'painel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
