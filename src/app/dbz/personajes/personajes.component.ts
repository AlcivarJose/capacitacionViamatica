import { Component, Input } from '@angular/core';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
  
})

export class PersonajesComponent  {
  // extrae los datos desde los servicios
  get Personajes(){
    return this.dbzservice.personajes;
  }

  //@Input('data') Personajes:personaje[] = [];  
  constructor(private dbzservice:Dbzservice){
  };
}
