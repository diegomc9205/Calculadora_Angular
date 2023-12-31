import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
// creo la clase TablaComponent con los campos y los defino
  nombre: string = '';
  apellido: string = '';
  fecha: Date = new Date(); // aqui creamos una nueva fecha que al tener el atributo html readonly nos mostrará en la que el usuario se registre ese dia
  // este es el array para guardar los registros
  registros: {id: number, nombre: string, apellido: string, fecha: Date}[] = [];
  id: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  agregarRegistro() {
    if (this.nombre && this.apellido && this.fecha) {
      this.registros.push({id: this.id, nombre: this.nombre, apellido: this.apellido, fecha: this.fecha});
      this.nombre = '';
      this.apellido = '';
      this.fecha = new Date();
      this.id++;
    } else {
      alert('Por favor, rellene todos los campos');
    }
  }

}
