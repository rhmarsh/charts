import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  kpi1Data: Observable<[]>;
  kpi2Data: Observable<[]>;
  kpi3Data: Observable<[]>;
  //@Output() chartTypeEmitter = new EventEmitter<string>();
  chartTypeChange: Observable<string>;
  constructor(private dataService: DataService) {
    this.kpi1Data = dataService.getKPI1Data();
    this.kpi2Data = dataService.getKPI2Data();
    this.kpi3Data = dataService.getKPI3Data();
    this.chartTypeChange = of('init');
  }

  ngOnInit() {
  }

  drawChart(event) {
    this.chartTypeChange = of(event);
  }



}