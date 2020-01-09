import { Ingreso } from '../ingreso-app/ingreso-app.model';
import { Egreso } from '../egreso-app/egreso-app.model';

export class Presupuesto {

  private static formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  private ingresoGlobal: number;
  private egresoGlobal: number;
  private presupuesto: number;


  constructor(listaIngresos: Ingreso[], listaEgresos: Egreso[]) {

    this.ingresoGlobal = 0;
    listaIngresos.forEach(valor => {
      this.ingresoGlobal = this.ingresoGlobal + valor.valorIngreso;
    });

    this.egresoGlobal = 0;
    listaEgresos.forEach(valor => {
      this.egresoGlobal = this.egresoGlobal + valor.valorEgreso;
    });

    this.presupuesto = this.ingresoGlobal - this.egresoGlobal;
  }


  static getValorUsd(valor: number) {
    return this.formatter.format(valor);
  }

  getPresupuesto() {
    return Presupuesto.formatter.format(this.presupuesto);
  }

  getIngresosTotal() {
    return Presupuesto.formatter.format(this.ingresoGlobal);
  }

  getEgresosTotal() {
    return Presupuesto.formatter.format(this.egresoGlobal);
  }


  getPorcentaje() {
    const porcentaje: number = (this.egresoGlobal * 100) / this.ingresoGlobal;
    return porcentaje.toPrecision(2).toString() + '%';
  }

}
