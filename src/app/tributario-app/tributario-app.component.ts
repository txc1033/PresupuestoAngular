import { Presupuesto } from './../Servicios/Presupuesto.services';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tributario-app',
  templateUrl: './tributario-app.component.html',
  styleUrls: ['./tributario-app.component.css']
})
export class TributarioAppComponent implements OnInit {

  public tributarioEsIngreso = true;

  @ViewChild('descripcionInput', { static: false }) tributarioDescripcion: ElementRef;
  @ViewChild('valorInput', { static: false }) tributarioValor: ElementRef;

  constructor(private presupuesto: Presupuesto) { }

  ngOnInit() {
  }

  asignaTributarioP(positivoNegativo) {
    this.tributarioEsIngreso = positivoNegativo.target.value === '+' ? true : false; }

  metodoAgregar() {
    if(this.tributarioDescripcion.nativeElement.value != '' && this.tributarioValor.nativeElement.value != '') {
    // tslint:disable-next-line:radix
    this.presupuesto.agregar(this.tributarioDescripcion.nativeElement.value, parseInt(this.tributarioValor.nativeElement.value)
                             , this.tributarioEsIngreso);
      this.tributarioDescripcion.nativeElement.value = '';
      this.tributarioValor.nativeElement.value = '';
    }
  }


}
