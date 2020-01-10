import { Presupuesto } from './../Servicios/Presupuesto.services';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tributario-app',
  templateUrl: './tributario-app.component.html',
  styleUrls: ['./tributario-app.component.css']
})
export class TributarioAppComponent implements OnInit {

  // public tributarioDescripcion: string;
  // public tributarioValor: number;
  public tributarioEsIngreso: boolean;

  @ViewChild('descripcionInput') tributarioDescripcion: ElementRef;
  @ViewChild('valorInput') tributarioValor: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  asignaTributarioP(positivoNegativo: string) { this.tributarioEsIngreso = positivoNegativo === '+' ? true : false; }

  metodoAgregar() {
      // const presp: Presupuesto = new Presupuesto([], []);
    console.log(this.tributarioDescripcion.nativeElement.value, this.tributarioValor.nativeElement.value, this.tributarioEsIngreso );


  }


}
