import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations:[
        ContadorComponent,
    ],
    imports:[
        BrowserModule,
    ],
    exports:[
        ContadorComponent,
    ],
})

export class contadorModule{


}