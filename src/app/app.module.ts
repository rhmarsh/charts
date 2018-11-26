import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartistModule } from 'ng-chartist';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Kpi1Component } from './kpi1/kpi1.component';
import { Kpi2Component } from './kpi2/kpi2.component';
import { Kpi3Component } from './kpi3/kpi3.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartistModule, GoogleChartsModule.forRoot() ],
  declarations: [ AppComponent,  DashboardComponent, NavigationComponent, HeaderComponent, FooterComponent, Kpi1Component, Kpi2Component, Kpi3Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
