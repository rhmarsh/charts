import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Output() chartType = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  clearKPIs() {}

  flotr2() {
    this.chartType.emit('flotr2');
  }

  chartjs() {
    this.chartType.emit('chartjs');
  }

  chartist() {
    this.chartType.emit('chartist');
  }

  google() {
    this.chartType.emit('googleCharts');
  }

  d3() {}

  leaflet() {}

}