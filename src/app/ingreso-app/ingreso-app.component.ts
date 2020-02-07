
import { Component, OnInit, Injectable, Inject, forwardRef } from '@angular/core';
import { Ingreso } from './ingreso-app.model';
import { IngresoService } from './ingreso-app.service';


@Component({
  selector: 'app-ingreso-app',
  templateUrl: './ingreso-app.component.html',
  styleUrls: ['./ingreso-app.component.css']
})
  @Injectable()
export class IngresoAppComponent implements OnInit {

  ingresos: Ingreso[] = [];

  constructor(@Inject(forwardRef(() => IngresoService)) private servicioIngreso: IngresoService) { }

  ngOnInit() {
    this.ingresos = this.servicioIngreso.ingresos;
  }

  agregarIngreso(ing: Ingreso) { this.servicioIngreso.Agregar(ing); }
  eliminarIngreso(ing: Ingreso) { this.servicioIngreso.Eliminar(ing); }
}
