import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescubreComponentComponent } from './components/descubre-component/descubre-component.component';

import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { InicioComponent } from './components/inicio/inicio.component';



const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'editar', component: EditarProductosComponent},
  { path: 'registrate', component: DescubreComponentComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
