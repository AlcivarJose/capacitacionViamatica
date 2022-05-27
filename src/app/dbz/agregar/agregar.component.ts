import { Component,Input, } from '@angular/core';
import { personaje } from '../interfaces/dbz.interfaces';
import { Dbzservice } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {


//emite datos de salida
  @Input() nuevo:personaje={
    nombre:'',
    poder: 0
  }
// emite enventos en este caso de tipo de entrada 
 // @Output() onNuevoPersonaje:EventEmitter<personaje>=new EventEmitter();
  constructor(private dbzservice:Dbzservice){}

  agregar()
  {
    // pausa la ejecucion para una depuracion controlada  
    //debugger;
    // this.onNuevoPersonaje.emit(this.nuevo);
    // llama al servicio atraves del contructor
    this.dbzservice.agregarPersonaje(this.nuevo);
    if(this.nuevo.nombre.trim().length ==0 ){return;}
    console.log(this.nuevo);   
    this.nuevo={
      nombre:'',
      poder: 0
    }
  }
}
