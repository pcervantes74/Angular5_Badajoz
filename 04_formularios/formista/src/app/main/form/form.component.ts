import { UserModel } from './../../models/users';
import { DepartamentoModel } from './../../models/departaments';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Printer, PrinterModel } from './../../models/printers';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sName: string;
  aPrinters: Array<Printer>;
  impresoraSeleccionada: Printer;
  isColor: boolean;
  isClaro: boolean;
  aDepartamentos: Array<DepartamentoModel>;
  departamentoSeleccionado: DepartamentoModel;
  verResumen: boolean;
  user: UserModel;
  // Dentro del ViewChild se pone el nombre que hemos puesto en el formulario   <form novalidate #formulario="ngForm">
  @ViewChild('formulario') formulario: any;

  constructor() { }

  ngOnInit() {
    this.sName = '';
    this.aPrinters = [
      new PrinterModel (1, 'HP', 'Tinta'),
      new PrinterModel (2, 'EPSON', 'Laser'),
      new PrinterModel (3, 'Brother', 'Matricial'),
      {id: 4, modelo: 'Xerox', tipo: 'Laser'}   // aunque esto no tiene sentido hacerlo, tambien lo admitiría.
    ];
    this.aDepartamentos = [
      new DepartamentoModel (1, 'Ventas'),
      new DepartamentoModel (2, 'Compras'),
      new DepartamentoModel (3, 'Formacion')
    ];
    this.user = new UserModel ('', '', '', '');

    console.log (this.formulario);
  }

  avisarImpresora() {
    console.log ('Cambio Impresora');
  }

  avisarColor() {
    console.log ('Cambio Color');
  }

  avisarDepartamento() {
    console.log ('Cambio Departamento Print');
  }

  borrar() {
    this.formulario.reset();
    console.log ('Borrando voy...  borrando vengo');
  }

  enviar() {
    this.verResumen = true;
    console.log ('envio');
  }

}
