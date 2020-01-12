

import { Inject, forwardRef } from '@angular/core';
import { Ingreso } from '../ingreso-app/ingreso-app.model';
import { Egreso } from '../egreso-app/egreso-app.model';
import { EgresoService } from './../egreso-app/egreso-app.service';
import { IngresoService } from './../ingreso-app/ingreso-app.service';
export class Presupuesto {

  private static formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  private ingresos: Ingreso[] = [];
  private egresos: Egreso[] = [];
  private ingresoGlobal: number;
  private egresoGlobal: number;
  private presupuesto: number;

  constructor(@Inject(forwardRef(() => IngresoService)) private ingAppHijo: IngresoService
            , @Inject(forwardRef(() => EgresoService)) private egrAppHijo: EgresoService) {
              this.ingresos = this.ingAppHijo.ingresos;
              this.egresos = this.egrAppHijo.egresos;
            }

  static getValorUsd(valor: number) {
    return this.formatter.format(valor);
  }


   public agregar(tributarioDescripcion: string, tributarioValor: number, tributarioEsIngreso: boolean) {
    if (tributarioEsIngreso) {
      const ingreso = new Ingreso(tributarioDescripcion, tributarioValor );
      this.ingAppHijo.Agregar(ingreso);
    } else {
      const egreso = new Egreso(tributarioDescripcion, tributarioValor);
      this.egrAppHijo.Agregar(egreso);
    }
  }



  getPresupuesto() {
    this.getEgresosTotal();
    this.getIngresosTotal();
    this.presupuesto = this.ingresoGlobal - this.egresoGlobal;
    return Presupuesto.formatter.format(this.presupuesto);
  }

  getIngresosTotal() {
    this.ingresoGlobal = 0;
    this.ingresos.forEach(valor => {
      this.ingresoGlobal += valor.valorIngreso;
    });
    return Presupuesto.formatter.format(this.ingresoGlobal);
  }

  getEgresosTotal() {
    this.egresoGlobal = 0;
    this.egresos.forEach(valor => {
      this.egresoGlobal += valor.valorEgreso;
    });
    return Presupuesto.formatter.format(this.egresoGlobal);
  }


  getPorcentaje() {
    let porcentaje: number = (this.egresoGlobal / this.ingresoGlobal) * 100;
    porcentaje = isNaN(porcentaje) ? 0 : porcentaje;
    porcentaje = porcentaje > 101 ? 101 : porcentaje;
    return  porcentaje === 101 ? '-100%' : porcentaje.toPrecision(3).toString() + '%';
  }

}
