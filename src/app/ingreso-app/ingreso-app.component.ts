import { Ingreso } from './ingreso-app.model';
import { IngresoService } from './ingreso-app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso-app',
  templateUrl: './ingreso-app.component.html',
  styleUrls: ['./ingreso-app.component.css']
})
export class IngresoAppComponent implements OnInit {

  ingresos: Ingreso[]=[];

  constructor(private ingresosService: IngresoService) { }

 ngOnInit(){
   this.ingresos = this.ingresosService.ingresos;
 }

  agregarIngreso(ingreso: Ingreso){

  }
}
