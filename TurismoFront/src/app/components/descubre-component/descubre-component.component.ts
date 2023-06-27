import { Component } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-descubre-component',
  templateUrl: './descubre-component.component.html',
  styleUrls: ['./descubre-component.component.css']
})
export class DescubreComponentComponent {

  resultado!: string;

  constructor(private fb: FormBuilder) {}

  formularioRegistro = this.fb.group ({
    nombre: ['', [Validators.required, Validators.minLength(10)]],
    apellidos: ['', [Validators.required, Validators.minLength(20)]],
    correo: ['', [Validators.required, Validators.email]],
    edad: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    numero: ['', [Validators.required]],


  })


  submit() {
    if (this.formularioRegistro.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }


}
