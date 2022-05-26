import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] = ['Viquito','petra','pamela ','santita','victoria','manuel'];
  heroeBorrado:string = '';
  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift() ||'';
    //this.heroeBorrado=this.heroes.shift() ||'';
    //const heroeBorrado=this.heroes.shift();
  }
}
