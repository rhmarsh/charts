import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';
import { flotr2, unflotr2 } from './kpi2';
import Chart from 'chart.js';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-kpi2',
  templateUrl: './kpi2.component.html',
  styleUrls: ['./kpi2.component.css']
})
export class Kpi2Component implements OnInit {

  @Input() kpi2Data: [];
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
        this.flotrGraph = flotr2(this.kpi2Data);
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
    this.chart = new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: ['1st', '2nd', '3rd', '4th'],
        datasets: [{
          label: 'Expenses',
          data: [2.1,2.75,3.56,4.9],
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
    let chart = new Chartist.Bar('#ct-chart2', {
      labels: ['1st', '2nd', '3rd', '4th'],
      series: [[2.1,2.75,3.56,4.9]]
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
      title: 'Expenses',
      type: 'BarChart',
      data: [['1st',2.1],['2nd',2.75],['3rd',3.56],['4th',4.9]],
      columnNames: ['Quater', 'Millions'],
      options: null,
      width: 640,
      height: 270
    };
  }
}