import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { flotr2, unflotr2 } from './kpi1';
import { Chart } from 'chart.js';
import { of } from 'rxjs';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-kpi1',
  templateUrl: './kpi1.component.html',
  styleUrls: ['./kpi1.component.css']
})
export class Kpi1Component implements OnInit, OnChanges {

  @Input() kpi1Data: [];
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
        this.flotrGraph = flotr2(this.kpi1Data);
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
    this.chart = new Chart('canvas1', {
      type: 'line',
      data: {
        labels: ['1st', '2nd', '3rd', '4th'],
        datasets: [{
          label: 'Revenue',
          data: [1.2,1.6,1.4,1.3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Quarters'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Millions'
            },
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

  chartistJS() {
    this.flotr2 = false;
    this.chartjs = false;
    this.chartist = true;
    this.googleCharts = false;
    if (this.flotrGraph !== null && this.flotrGraph !== undefined) {
      unflotr2(this.flotrGraph);
    }
    let chart = new Chartist.Line('#ct-chart1', {
      labels: ['1st', '2nd', '3rd', '4th'],
      series: [[1.2,1.6,1.4,1.3]]
    }, {
      width: 640,
      height: 270}
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
      title: 'Revenue',
      type: 'LineChart',
      data: [['1st',1.2],['2nd',1.6],['3rd',1.4],['4th',1.3]],
      columnNames: ['Quater', 'Millions'],
      options: null,
      width: 640,
      height: 270
    };
  }
}