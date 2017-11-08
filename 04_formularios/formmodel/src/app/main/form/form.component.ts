import { UserModel } from './../../models/users';
import { DepartamentoModel } from './../../models/departaments';
import { Component, OnInit } from '@angular/core';
import { Printer, PrinterModel } from './../../models/printers';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  aPrinters: Array<Printer>;
  aDepartamentos: Array<DepartamentoModel>;
  verResumen: boolean;
  formulario: FormGroup;
 
  constructor() { }

  ngOnInit() {
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
    this.formulario = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.minLength(4)]),
      apellido : new FormControl('', [Validators.required]),
      telefono : new FormControl('', [Validators.pattern('^[0-9]{9}')]),
      impresora : new FormControl(),
      color : new FormControl({value: true, disabled: true}),
      claro : new FormControl(false),
      departamento : new FormControl()
    });
  }

    fnaccion() {
      // return true;
      if (this.formulario.controls.impresora.valid) {
        this.formulario.controls['color'].enable();
      }
      else  this.formulario.controls['color'].disable();
      
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
    // this.formulario.reset();
    console.log ('Borrando voy...  borrando vengo');
  }

  enviar() {
    this.verResumen = true;
    console.log ('envio');
  }

}
