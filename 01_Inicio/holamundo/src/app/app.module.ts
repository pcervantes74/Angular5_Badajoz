import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // exports: [], lo que se exporta desde este módulo iría en bootstrap. En otros módulos no existe bootstrap y se pone con el exports.
  bootstrap: [AppComponent]
})
export class AppModule { }
