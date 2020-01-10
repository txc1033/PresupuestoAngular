import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso-app.model';

@Component({
  selector: 'app-egreso-app',
  templateUrl: './egreso-app.component.html',
  styleUrls: ['./egreso-app.component.css']
})
export class EgresoAppComponent implements OnInit {

  // tslint:disable-next-line: whitespace
  egresos: Egreso[] = [new Egreso('Renta departamento', 900), new Egreso('Ropa', 1500), new Egreso('Bencina', 450)
                                  , new Egreso('Comida para gatos', 200)];


  constructor() { }

  ngOnInit() {
  }

  getPorcentaje(valorEg)  {
    let total = 0;

    this.egresos.forEach( valor => {
      total = total + valor.valorEgreso;
    });

    const porcentaje: number = (valorEg * 100) / total;
    return porcentaje.toPrecision(2).toString() + '%';
  }

  agregarEgreso(egreso: Egreso) {
    this.egresos.push(egreso);
  }

}
