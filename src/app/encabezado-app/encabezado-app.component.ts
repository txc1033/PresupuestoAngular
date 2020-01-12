import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-encabezado-app',
  templateUrl: './encabezado-app.component.html',
  styleUrls: ['./encabezado-app.component.css']
})

export class EncabezadoAppComponent {

  @Input() presupuesto: string;
  @Input() ingresoTotal: string;
  @Input() egresoTotal: string;
  @Input() porcentajeEgreso: string;

  constructor() { }

}
