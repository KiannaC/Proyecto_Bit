import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarProductosComponent } from './components/editar-productos/editar-productos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DescubreComponentComponent } from './components/descubre-component/descubre-component.component';
<<<<<<< HEAD
import { DesubreMasComponent } from './components/desubre-mas/desubre-mas.component';
=======
import { Error404Component } from './components/error404/error404.component';
>>>>>>> 8ee8f0a19bdb85dd28c6d1f267b7b427c3d66ab1



@NgModule({
  declarations: [
    AppComponent,
    EditarProductosComponent,
    InicioComponent,
    NavbarComponent,
    DescubreComponentComponent,
<<<<<<< HEAD
    DesubreMasComponent
=======
    Error404Component
>>>>>>> 8ee8f0a19bdb85dd28c6d1f267b7b427c3d66ab1
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
