import { Component } from '@angular/core';
import { Nota } from '../../Interfaces/nuevaNota';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  title = 'Bloc de notas';
  notas: Nota[] = [];
  mostrarHijo: boolean = false;
  font = 'Roboto';
  size = 24;
  color = 'black';

  agregarNota(texto: string) {
    if (texto.trim().length > 0) {
      const nuevaNota: Nota = {
        texto: texto,
        fuente: this.font,
        tamanio: this.size,
        color: this.color,
        realizado: false,
        mostrarMenu: false
      };
      this.notas.push(nuevaNota);
    }
  }

  MostrarHijo() {
    this.mostrarHijo = !this.mostrarHijo;
  }

  marcarRealizado(index: number) {
    this.notas[index].realizado = !this.notas[index].realizado;
  }

  mostrarMenu(event: MouseEvent, index: number) {
    event.preventDefault();
    this.notas.forEach(nota => nota.mostrarMenu = false);
    this.notas[index].mostrarMenu = true;
  }

  eliminarNota(index: number) {
    this.notas.splice(index, 1);
  }

  cambiarFonts(event: Event) {
    const font = (event.target as HTMLSelectElement).value;
    console.log('fuente seleccionada:', font);
    this.font = font; // Actualizar el valor de la fuente seleccionada
    if (this.notas.length > 0) {
      this.notas[this.notas.length - 1].fuente = font;
    }
  }

  cambiarTamanio(event: Event){
    const size = parseInt((event.target as HTMLSelectElement).value, 10);
    console.log('tamanio seleccionado:', size);
    this.size = size; // Actualizar el valor del tamaño seleccionado
    if (this.notas.length > 0) {
      this.notas[this.notas.length - 1].tamanio = size;
    }
  }

  cambiarColor(event: Event) {
    const color = (event.target as HTMLInputElement).value;
    console.log('color seleccionado:', color);
    this.color = color; // Actualizar el valor del color seleccionado
    if (this.notas.length > 0) {
      this.notas[this.notas.length - 1].color = color;
    }
  }
}
