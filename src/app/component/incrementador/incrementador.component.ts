
import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtEntrada') txtEntrada= ElementRef;

  @Input('titulo') leyenda: string= 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number>= new EventEmitter();

  constructor() {
    // console.log('Leyenda: ', this.leyenda);
    // console.log('Progreso: ', this.progreso);

  }

  ngOnInit() {
    // console.log('Leyenda: ', this.leyenda);
    // console.log('Progreso: ', this.progreso);
  }

  cambiarValor(valor:number) {
    this.progreso= this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    if(this.progreso<=0) {
      return this.progreso= 0;
    }
    // tslint:disable-next-line:one-line
    if(this.progreso>=100){
      return this.progreso= 100;
    }

  }

  onChange(e:number) {

    // let elementoHTML: any= document.getElementsByName('progreso')[0];
    // console.log(elementoHTML.value);
    // console.log(this.txtEntrada);
    if(e>=100) {
      this.progreso=100;
    } else if(e<=0) {
      this.progreso=0;
    } else {
      this.progreso=e;
    }
    // elementoHTML.value= this.progreso;
    this.txtEntrada.nativeElement.value=this.progreso;
    this.cambioValor.emit(e);
  }


}
