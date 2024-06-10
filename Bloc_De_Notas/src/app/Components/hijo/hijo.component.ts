import { Component, Output, EventEmitter } from '@angular/core';
import { Nota } from '../../Interfaces/nuevaNota';


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
nuevaNota: string = '';

@Output() nuevaNotaEvent = new EventEmitter<string>();

agregarNota() {
  if (this.nuevaNota) {
    this.nuevaNotaEvent.emit(this.nuevaNota);
    this.nuevaNota = '';    
  }
}


}
