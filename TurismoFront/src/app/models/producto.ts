export class Producto {
  Tipo_de_destino: string;
  Tipo_de_clima: string;
  Actividades: string;
  Preferencias_gastronomicas: string;
  Tiempo_de_viaje: string;
  Cantidad_de_turistas: string | number;
  Presupuesto: number;
  Hobbies: string;

  constructor(Tipo_de_destino: string, Tipo_de_clima: string, Actividades: string, Preferencias_gastronomicas: string, Tiempo_de_viaje: string, Cantidad_de_turistas: string | number, Presupuesto: number, Hobbies: string){
    this.Tipo_de_destino = Tipo_de_destino;
    this.Tipo_de_clima = Tipo_de_clima;
    this.Actividades = Actividades;
    this.Preferencias_gastronomicas = Preferencias_gastronomicas;
    this.Tiempo_de_viaje = Tiempo_de_viaje;
    this.Cantidad_de_turistas = Cantidad_de_turistas;
    this.Presupuesto = Presupuesto;
    this.Hobbies = Hobbies;
  }
}
