import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Contador/contador.component';
import { heroesmodule } from './Heroe/herores.module';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],

  imports: [
    BrowserModule,
    heroesmodule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
