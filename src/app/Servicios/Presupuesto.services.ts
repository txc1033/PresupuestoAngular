import { ViewChild } from '@angular/core';
import { EgresoAppComponent } from './../egreso-app/egreso-app.component';
import { IngresoAppComponent } from './../ingreso-app/ingreso-app.component';
import { Ingreso } from '../ingreso-app/ingreso-app.model';
import { Egreso } from '../egreso-app/egreso-app.model';

export class Presupuesto {

  private static formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  @ViewChild(IngresoAppComponent) ingAppHijo: IngresoAppComponent;
  @ViewChild(EgresoAppComponent) egrAppHijo: EgresoAppComponent;


  private ingresoGlobal: number;
  private egresoGlobal: number;
  private presupuesto: number;

  static getValorUsd(valor: number) {
    return this.formatter.format(valor);
  }


   public agregar(tributarioDescripcion: string, tributarioValor: number, tributarioEsIngreso: boolean) {
    if (tributarioEsIngreso) {
      const ingreso = new Ingreso(tributarioDescripcion, tributarioValor );
      this.ingAppHijo.agregarIngreso(ingreso);
    } else {
      const egreso = new Egreso(tributarioDescripcion, tributarioValor);
      this.egrAppHijo.agregarEgreso(egreso);
    }
  }

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
