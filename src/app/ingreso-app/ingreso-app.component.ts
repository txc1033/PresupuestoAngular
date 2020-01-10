import { Ingreso } from './ingreso-app.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ingreso-app',
  templateUrl: './ingreso-app.component.html',
  styleUrls: ['./ingreso-app.component.css']
})
export class IngresoAppComponent {

  // tslint:disable-next-line: max-line-length
  ingresos: Ingreso[] = [new Ingreso('Salario', 2100), new Ingreso('Venta coche', 1500), new Ingreso('Bono de navidad', 1500)
                                     , new Ingreso('Uber', 500)];

  constructor() { }



  agregarIngreso(ingreso: Ingreso) { this.ingresos.push(ingreso); }

}
