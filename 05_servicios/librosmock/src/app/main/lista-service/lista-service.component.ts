import { GoogleService } from './../../services/google.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-service',
  templateUrl: './lista-service.component.html',
  styleUrls: ['./lista-service.component.css']
})
export class ListaServiceComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public googleService: GoogleService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  buscar() {
      this.googleService.buscarLibros(this.sClave)
      .subscribe(
        (response) => {
          this.aLibros = response;
          console.log(response);
        }
      );
  }

}
