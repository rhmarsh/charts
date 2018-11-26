import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = '';
  kpi3Data = [[[2.1,1], [2.75, 2], [3.56, 3], [4.9, 4]],[[1.2, 1], [1.6,2], [1.4,3], [1.3,4]]];
  kpi2Data = [[[1, 2.1], [2, 2.75], [3, 3.56], [4, 4.9]]];
  kpi1Data = [[[1, 1.2], [2, 1.6], [3, 1.4], [4, 1.3]]];
  constructor() { }

  getKPI1Data(): Observable<any> {
    return of(this.kpi1Data);
  }

  getKPI2Data(): Observable<any> {
    return of(this.kpi2Data);
  }

  getKPI3Data(): Observable<any> {
    return of(this.kpi3Data);
  }
}