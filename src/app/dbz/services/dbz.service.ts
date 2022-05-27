import { Injectable } from "@angular/core";
import { personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class Dbzservice{
    
    private _Personajes:personaje[] = [
        {
          nombre:'victoria',
          poder:7500
        },
        {
          nombre:'gloria',
          poder:6500
        }
      ]
    // ... punto significa que separe todos los elementos del arreglo y crear uno nuevo
    // extrae los datos datos del los servicios tipo privados ( datos protegidos a la vista)
    get personajes():personaje[]{
        return [...this._Personajes];
    }

    constructor(){ }
        //console.log(' prueba de servicio');
        agregarPersonaje (argumento:personaje)
        {
            this._Personajes.push(argumento);
        }
}
/*function agregarPersonaje(personajes: any, personaje: any) {
    throw new Error("Function not implemented.");
}*/
