import { Component } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  Personajes:personaje[] = [
    {
      nombre:'victoria',
      poder:7500
    },
    {
      nombre:'gloria',
      poder:6500
    }
  ]
  nuevo:personaje={
    nombre:'victoria alcivar',
    poder:1000

  }
  // envia por evento el valor de los personajes a la interfase
  agregarNuevoPersonaje(arg:personaje){
    this.Personajes.push(arg);
  }
}

