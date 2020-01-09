import { Presupuesto } from '../Servicios/Presupuesto.services';

export class Egreso {

  constructor(public descripcionEgreso: string, public valorEgreso: number) {}

  getValorUsd() {
    return Presupuesto.getValorUsd(this.valorEgreso);
  }


}
