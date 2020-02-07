import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Presupuesto } from './Servicios/Presupuesto.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  constructor(private presupuesto: Presupuesto) { }
  getPresupuesto() { return this.presupuesto.getPresupuesto(); }
  getIngreso() { return this.presupuesto.getIngresosTotal(); }
  getEgreso() { return this.presupuesto.getEgresosTotal(); }
  getPorcentaje() { return this.presupuesto.getPorcentaje(); }

}
