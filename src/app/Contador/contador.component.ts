import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
        <h1>Victoria mi vida </h1>
        <button (click)="acumular(-base)">-1</button>
        <span>{{numero}}</span>
        <button (click)="acumular(base);">+1</button> 
    `,           
  })

export class ContadorComponent{
    title = 'Capacitacion Viamatica';
    numero:number =  10;
    base  :number =   5;
  
    acumular (valor:number){
      this.numero+=valor; 
    }

}