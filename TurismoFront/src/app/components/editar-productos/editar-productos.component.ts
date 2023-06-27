import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {


  editProducts: Producto[] = [];

  constructor (public _productoService: ProductoService) {}

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
