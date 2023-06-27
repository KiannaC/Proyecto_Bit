import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  resultado!: string;

  constructor(private fb: FormBuilder) { }

  formularioInicioSesion = this.fb.group({
    correo: ['', [Validators.required, Validators.email]]
  })

  submit() {
    if (this.formularioInicioSesion.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos";
  }

}



