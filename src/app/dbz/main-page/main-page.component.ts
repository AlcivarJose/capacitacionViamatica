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
    nombre:'',
    poder: 0
  }
  agregar()
  {
    if(this.nuevo.nombre.trim().length ==0 ){return;}
    console.log(this.nuevo);   
    this.Personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder: 0
    }
  }
}

