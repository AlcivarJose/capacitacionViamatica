import { Component, Input } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
  
})

export class PersonajesComponent  {

  @Input('data') Personajes:personaje[] = [];  

}
