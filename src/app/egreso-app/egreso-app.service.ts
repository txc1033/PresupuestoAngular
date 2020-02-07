import { Egreso } from './egreso-app.model';

export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 1500),
    new Egreso('Bencina', 450),
    new Egreso('Comida para gatos', 200) ];


  Porcentaje(valorEg) {
    let total = 0;

    this.egresos.forEach(valor => {
      total += valor.valorEgreso;
    });

    let porcentaje: number = (valorEg / total) * 100;
    porcentaje = isNaN(porcentaje) ? 0 : porcentaje;
    return porcentaje.toPrecision(3).toString() + '%';
  }

  Agregar(egreso: Egreso) { this.egresos.push(egreso); }
  Eliminar(ingreso: Egreso) {
    const indice = this.egresos.indexOf(ingreso);
    this.egresos.splice(indice, 1);
  }
}
