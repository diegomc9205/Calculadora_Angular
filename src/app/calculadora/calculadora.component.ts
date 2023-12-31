import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  //pongo el texto vacio y el resultado a 0 para empezar.
  entrada: string = '';
  resultado: number = 0;

  ngOnInit(): void {
    console.log("Componente se ha cargado")
  }
  //aqui meto el valor del imput en funcion de lo que pulses
  botonPresionado(valor: string) {
    this.entrada = this.entrada + valor;
  }
  // con el boton de rest que lo vincularé a nueva operacion lo que hago es borrar todo y resetear.
  reset() {
    this.entrada = '';
    this.resultado = 0;
  }
  // a continucacion en cada operacion la divido y lo que hago es crear 2 partes una para el numero. el .split lo que hace es eso que si por ejemplo le metes  (5+6)
  // te lo divide y crea en una matriz ["5",["6"],y luego
  //accedo con el resultado al numero de la primera posicion[0] y de la segunda[1] , y finalmente lo mostramos en la pantalla
  suma() {
    const operacion = this.entrada.split('+');
    const resultado = Number(operacion[0]) + Number(operacion[1]);
    this.entrada = resultado.toString();
  }

  resta() {
    const operacion = this.entrada.split('-');
    const resultado = Number(operacion[0]) - Number(operacion[1]);
    this.entrada = resultado.toString();
  }

  multiplicacion() {
    const operacion = this.entrada.split('*');
    const resultado = Number(operacion[0]) * Number(operacion[1]);
    this.entrada = resultado.toString();
  }

  division() {
    const operacion = this.entrada.split('/');
    const resultado = Number(operacion[0]) / Number(operacion[1]);
    this.entrada = resultado.toString();
  }

  //en evaluar,lo primero es coger el ultimo caracter de la entrada con slice(-1), luego verifico que es una operacion de las que tengo. en mi caso no deberia dar nunca ese error pero lo pongo como comprobación para otro proyecto o si se hace mas grande
  //en caso de estar todo bien utilizando la funcion eva( lo que hace es la operacion que le pasemos en string) y luego lo muestro.
  evaluar() {
    const ultimoCaracter = this.entrada.slice(-1); 
    if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') { 
      alert('Operación inválida');
    } else {
      const resultado = eval(this.entrada); 
      this.entrada = resultado.toString();   
      alert('Operación inválida');
    }
  }
//aqui hago al princpio lo mismo que en la funcion de evaluar, y luego pues dependiendo de lo que encuentr en entrada pues suma,resta o hace lo que tenga que hacer llamando a su operador.
  igual() {
    const ultimoCaracter = this.entrada.slice(-1);
    if (ultimoCaracter === '+' || ultimoCaracter === '-' || ultimoCaracter === '*' || ultimoCaracter === '/') {
      alert('Operación inválida');
    } else {
      if (this.entrada.includes('+')) {
        this.suma();
      } else if (this.entrada.includes('-')) {
        this.resta();
      } else if (this.entrada.includes('*')) {
        this.multiplicacion();
      } else if (this.entrada.includes('/')) {
        this.division();
      }
      this.resultado = Number(this.entrada);
    }
  }

}
