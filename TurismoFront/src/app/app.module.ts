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



@NgModule({
  declarations: [
    AppComponent,
    EditarProductosComponent,
    InicioComponent,
    NavbarComponent,
    DescubreComponentComponent
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
