import { Ingreso } from './ingreso-app.model';

export class IngresoService {
  // tslint:disable-next-line: max-line-length
  ingresos: Ingreso[] = [new Ingreso('Salario', 2100), new Ingreso('Venta coche', 1500), new Ingreso('Bono de navidad', 1500)
    , new Ingreso('Uber', 500)];

  Agregar(ingreso: Ingreso) { this.ingresos.push(ingreso); }
}
