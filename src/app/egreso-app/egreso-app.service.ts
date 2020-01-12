import { Egreso } from './egreso-app.model';

export class EgresoService{
  egresos: Egreso[] = [new Egreso('Renta departamento', 900), new Egreso('Ropa', 1500), new Egreso('Bencina', 450)
    , new Egreso('Comida para gatos', 200)];


  getPorcentaje(valorEg) {
    let total = 0;

    this.egresos.forEach(valor => {
      total = total + valor.valorEgreso;
    });

    const porcentaje: number = (valorEg * 100) / total;
    return porcentaje.toPrecision(2).toString() + '%';
  }

  agregarEgreso(egreso: Egreso) {
    this.egresos.push(egreso);
  }
}
