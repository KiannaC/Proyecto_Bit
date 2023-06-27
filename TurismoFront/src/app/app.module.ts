import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DescubreComponentComponent } from './components/descubre-component/descubre-component.component';
import { DesubreMasComponent } from './components/desubre-mas/desubre-mas.component';
import { BogotaPaginaComponent } from './components/bogota-pagina/bogota-pagina.component';

import { MedellinPaginaComponent } from './components/medellin-pagina/medellin-pagina.component';
import { CartagenaPaginaComponent } from './components/cartagena-pagina/cartagena-pagina.component';
import { ManizalesComponentComponent } from './components/manizales-component/manizales-component.component';
import { LeticiaPaginaComponent } from './components/leticia-pagina/leticia-pagina.component';



@NgModule({
  declarations: [
    AppComponent,
    EditarProductosComponent,
    InicioComponent,
    NavbarComponent,
    DescubreComponentComponent,
    BogotaPaginaComponent,
    MedellinPaginaComponent,
    CartagenaPaginaComponent,
    ManizalesComponentComponent,
    LeticiaPaginaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
