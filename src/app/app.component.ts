import { EgresoAppComponent } from './egreso-app/egreso-app.component';
import { IngresoAppComponent } from './ingreso-app/ingreso-app.component';
import { Presupuesto } from './Servicios/Presupuesto.services';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {


  @ViewChild(IngresoAppComponent) private icomponent: IngresoAppComponent;
  @ViewChild(EgresoAppComponent) private ecomponent: EgresoAppComponent;

  title = 'presupuesto-app';
  presupuesto: Presupuesto;
  total: any;
  ingresoTotal: any;
  egresoTotal: any;
  porcentajeEgreso: string;

  ngAfterViewInit(): void {
    this.presupuesto = new Presupuesto(this.icomponent.ingresos, this.ecomponent.egresos);
    this.ingresoTotal = this.presupuesto.getIngresosTotal();
    this.egresoTotal =  this.presupuesto.getEgresosTotal();
    this.total = this.presupuesto.getPresupuesto();
    this.porcentajeEgreso = this.presupuesto.getPorcentaje();
    }
}
