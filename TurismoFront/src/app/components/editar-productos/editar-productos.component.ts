import { Component, OnInit } from '@angular/core';
import { Producto } from "src/app/models/producto";
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {

  editProducts: Producto[] = [];

  constructor (private _productoService : ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos ();
  }

  obtenerProductos () {
    this._productoService.getProductos ().subscribe(data =>{
      console.log (data);
      this.editProducts = data;
    }, error => {
      console.log(error)
    });

  }

}
