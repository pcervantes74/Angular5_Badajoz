import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { ListaAsyncComponent } from './lista-async/lista-async.component';
import { ListaGoogleComponent } from './lista-google/lista-google.component';
import { ListaServiceComponent } from './lista-service/lista-service.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListaComponent,
    ListaAsyncComponent,
    ListaGoogleComponent,
    ListaServiceComponent
    ],
  exports : [
    ListaComponent,
    ListaAsyncComponent,
    ListaGoogleComponent,
    ListaServiceComponent
  ],
})
export class MainModule { }
