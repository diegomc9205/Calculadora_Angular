import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TablaComponent } from './tabla/tabla.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    ListaTareasComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
