import { Presupuesto } from '../Servicios/Presupuesto.services';

export class Ingreso {

  constructor(public descripcionIngreso: string, public valorIngreso: number) {}

  getValorUsd() {
    return Presupuesto.getValorUsd(this.valorIngreso);
  }
}
