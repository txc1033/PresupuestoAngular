import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngresoAppComponent } from './ingreso-app/ingreso-app.component';
import { TributarioAppComponent } from './tributario-app/tributario-app.component';
import { EgresoAppComponent } from './egreso-app/egreso-app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoAppComponent,
    TributarioAppComponent,
    EgresoAppComponent,
    EncabezadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }