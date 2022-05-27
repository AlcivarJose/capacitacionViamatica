import { Component } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // get Personajes():personaje[]{
  //  return this.dbzservicie.Personajes;
  // }

    nuevo:personaje={
    nombre:'victoria alcivar',
    poder:1000
    }
  // envia por evento el valor de los personajes a la interfase
  /*agregarNuevoPersonaje(arg:personaje){
    this.Personajes.push(arg);
  }
  onstructor(private dbzservicie:Dbzservice)*/
    constructor(private dbzservicie:Dbzservice)
    {
    }
}

