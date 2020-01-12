
import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Egreso } from './egreso-app.model';
import { EgresoService } from './egreso-app.service';

@Component({
  selector: 'app-egreso-app',
  templateUrl: './egreso-app.component.html',
  styleUrls: ['./egreso-app.component.css']
})
export class EgresoAppComponent implements OnInit {

  egresos: Egreso[] = [];

  constructor(@Inject(forwardRef(() => EgresoService)) private servicioEgreso: EgresoService) { }

  ngOnInit() {
    this.egresos = this.servicioEgreso.egresos;
  }

  agregarEgreso(egr: Egreso) { this.servicioEgreso.Agregar(egr); }
  eliminarEgreso(egr: Egreso) { this.servicioEgreso.Eliminar(egr); }
  getPorcentaje(egr: Egreso) { return this.servicioEgreso.Porcentaje(egr); }

}
