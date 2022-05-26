import { Component } from "@angular/core";




@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html',
})
export class heroeComponent{
    v_heroe     :string = "Victoria lo hare por ti ";
    muestra_1   :string = "si se puede ";
    edad        :number = 6;

    obtenerNombre():string{
        return `${this.muestra_1} , ${this.v_heroe}`;
    }

    get nombreCapitalizado():string{
        return this.v_heroe.toUpperCase();
    }

    cambiarNombre():void{
        this.v_heroe="victoria y pamela";
    }
    cambiarEdad():void{
        this.edad=7;
    }


}