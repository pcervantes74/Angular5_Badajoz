import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  sNombre: string;
  nNumero: number;
  isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nNumero = 22;
  }

  btnBorrar() {
    this.sNombre = '';
  }
}
