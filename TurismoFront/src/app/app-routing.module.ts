import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescubreComponentComponent } from './components/descubre-component/descubre-component.component';

import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DesubreMasComponent } from './components/desubre-mas/desubre-mas.component';
import { BogotaPaginaComponent } from './components/bogota-pagina/bogota-pagina.component';
import { CartagenaPaginaComponent } from './components/cartagena-pagina/cartagena-pagina.component';
import { MedellinPaginaComponent } from './components/medellin-pagina/medellin-pagina.component';
import { ManizalesComponentComponent } from './components/manizales-component/manizales-component.component';
import { LeticiaPaginaComponent } from './components/leticia-pagina/leticia-pagina.component';



const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'editar', component: EditarProductosComponent},
  { path: 'registrate', component: DescubreComponentComponent},
  { path: 'descubre-mas', component: DesubreMasComponent},
  { path: 'bogota-pagina', component: BogotaPaginaComponent},
  { path: 'cartagena-pagina2', component: CartagenaPaginaComponent},
  { path: 'medellin-pagina', component: MedellinPaginaComponent},
  { path: 'manizales-pagina', component: ManizalesComponentComponent},
  { path: 'leticia-pagina', component: LeticiaPaginaComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
