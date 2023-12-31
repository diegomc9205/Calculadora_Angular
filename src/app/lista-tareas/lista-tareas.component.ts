import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  tareas: string[] = [];
  ultimaTareaEliminada: string = '';
  Chuches: string[] = []

  constructor() {
    this.tareas = ["Comprar leche", "Comprar pan", "Comprar huevos", "Comprar agua", "Comprar aceite"]
    this.Chuches = ["comprar gominolas", "comprar patatas fritas", "comprar gusanitos"]
  }

  ngOnInit(): void {
    console.log("Componente se ha cargado")
  }

  agregarTarea(tarea: string, event: Event){
    event.preventDefault();
    if (tarea !== '') {
      this.tareas.push(tarea);
    }
  }

  eliminarTarea(index: number): void {
    this.ultimaTareaEliminada = this.tareas[index];
    this.tareas.splice(index, 1);
  }

  recuperarUltimaTareaEliminada(): void {
    if (this.ultimaTareaEliminada !== '') {
      this.tareas.push(this.ultimaTareaEliminada);
      this.ultimaTareaEliminada = '';
    }
  }
  añadirChucheAleatoria(): void {}
}
