import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresoAppComponent } from './ingreso-app/ingreso-app.component';
import { TributarioAppComponent } from './tributario-app/tributario-app.component';
import { EgresoAppComponent } from './egreso-app/egreso-app.component';
import { EncabezadoAppComponent } from './encabezado-app/encabezado-app.component';

import { Presupuesto } from './Servicios/Presupuesto.services';
import { IngresoService } from './ingreso-app/ingreso-app.service';
import { EgresoService } from './egreso-app/egreso-app.service';

@NgModule({
  declarations: [
    AppComponent,
    IngresoAppComponent,
    TributarioAppComponent,
    EgresoAppComponent,
    EncabezadoAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [IngresoService, EgresoService, Presupuesto],
  bootstrap: [AppComponent]
})
export class AppModule { }
