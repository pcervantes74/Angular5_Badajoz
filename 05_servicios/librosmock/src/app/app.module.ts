import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MainModule } from './main/main.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { LibrosService } from './services/libros.service';
import { GoogleService } from './services/google.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
    SharedModule,
    ServicesModule
  ],
  providers: [
    LibrosService,
    GoogleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
