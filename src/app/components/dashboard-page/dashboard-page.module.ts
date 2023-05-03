import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBackgroundPageComponent } from './dashboard-background-page/dashboard-background-page.component';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';



@NgModule({
  declarations: [
    DashboardBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    DashboardPageRoutingModule
  ]
})
export class DashboardPageModule { }
