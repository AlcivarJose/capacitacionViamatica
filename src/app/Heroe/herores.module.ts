import { NgModule } from "@angular/core";
import { heroeComponent } from './heroes/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        heroeComponent,
        ListadoComponent,
    ],
    exports:[
        ListadoComponent,
    ],    
    imports:[
        CommonModule,
    ]

})
export class heroesmodule{

}