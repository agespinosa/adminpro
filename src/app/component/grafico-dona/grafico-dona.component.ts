import { Component, OnInit, Input, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {
  @ViewChild('torta') torta =  ElementRef;
  // Doughnut
  @Input() doughnutChartLabels: string[] ;
  @Input() doughnutChartData: number[];
  @Input() doughnutChartType: string ;
  
  constructor() { }

  ngOnInit() {
  }

}
