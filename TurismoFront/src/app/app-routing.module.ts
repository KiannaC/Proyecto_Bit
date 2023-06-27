import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescubreComponentComponent } from './components/descubre-component/descubre-component.component';

import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DesubreMasComponent } from './components/desubre-mas/desubre-mas.component';
import { BogotaPaginaComponent } from './components/bogota-pagina/bogota-pagina.component';



const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'editar', component: EditarProductosComponent},
  { path: 'registrate', component: DescubreComponentComponent},
  { path: 'descubre-mas', component: DesubreMasComponent},
  { path: 'bogota-pagina', component: BogotaPaginaComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
