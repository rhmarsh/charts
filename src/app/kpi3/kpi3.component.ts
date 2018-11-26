import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';
import { flotr2, unflotr2 } from './kpi3';
import Chart from 'chart.js';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-kpi3',
  templateUrl: './kpi3.component.html',
  styleUrls: ['./kpi3.component.css']
})
export class Kpi3Component implements OnInit {

  @Input() kpi3Data: [];
  @Input() chartTypeChange = of('');
  chart: any = [];
  flotr2: boolean = true;
  chartjs: boolean = false;
  chartist: boolean = false;
  googleCharts: boolean = false;
  flotrGraph: any;
  gchart: {};
  
  constructor() { 
    this.gchart = {
      title: 'Temp',
      type: 'LineChart',
      data: [[1,1],[2,2],[3,3],[4,4]],
      columnNames: ['1st', '2nd'],
      options: null,
      width: 0,
      height: 0
    };
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.chartTypeChange) {
      if (changes.chartTypeChange.currentValue === 'flotr2') {
        this.flotr2 = true;
        this.chartjs = false;
        this.chartist = false;
        this.googleCharts = false;
        this.flotrGraph = flotr2(this.kpi3Data);
      } else if (changes.chartTypeChange.currentValue === 'chartjs') {
        this.chartJS();
      } else if (changes.chartTypeChange.currentValue === 'chartist') {
        this.chartistJS();
      } else if (changes.chartTypeChange.currentValue === 'googleCharts') {
        this.googleChart();
      }
    }
  }

  chartJS() {
    this.flotr2 = false;
    this.chartjs = true;
    this.chartist = false;
    this.googleCharts = false;
    if (this.flotrGraph !== null && this.flotrGraph !== undefined) {
      unflotr2(this.flotrGraph);
    }
    this.chart = new Chart('canvas3', {
      type: 'polarArea',
      data: {
        labels: ['1st', '2nd', '3rd', '4th'],
        datasets: [{
          label: '2016 Combined',
          //[2.1,2.75,3.56,4.9],
          data: [1.2 - 2.1,1.6 - 2.75,1.4 - 3.56,1.3-4.9],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(99, 132, 255, 0.2)',
            'rgba(132, 255, 99, 0.2)',
            'rgba(132, 99, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(99,132,255,1)',
            'rgba(132,255,99,1)',
            'rgba(132,99,255,1)'
          ],
          borderWidth: 1
        }]
      }
    });
  }

  chartistJS() {
    this.flotr2 = false;
    this.chartjs = false;
    this.chartist = true;
    this.googleCharts = false;
    let chart = new Chartist.Pie('#ct-chart3', {
      labels: ['1st', '2nd', '3rd', '4th'],
      series: [0.9,1.15,2.16,3.6]
    }, {
      width: 640,
      height: 270, 
      donut: true,
      donutWidth: 60,
      startAngle: 270,
      total: 15.5,
      //showLabel: false
    }
    );
    this.chart = chart;
  }

  googleChart() {
    this.flotr2 = false;
    this.chartjs = false;
    this.chartist = false;
    this.googleCharts = true;
    if (this.flotrGraph !== null && this.flotrGraph !== undefined) {
      unflotr2(this.flotrGraph);
    }
    this.gchart = {
      title: 'Combined',
      type: 'CandlestickChart',
      data: [
        ['1st',2.1,2.1,1.2,1.2],
        ['2nd',2.75,2.75,1.6,1.6],
        ['3rd',3.56,3.56,1.4,1.4],
        ['4th',4.9,4.9,1.3,1.3]],
      columnNames: ['Quarter', 'Expense','Expense','Revenue','Revenue'],
      options: {
        legend: 'none',
        bar: { groupWidth: '100%' }, // Remove space between bars.
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
        }
      },
      width: 640,
      height: 270
    };
  }
  
}