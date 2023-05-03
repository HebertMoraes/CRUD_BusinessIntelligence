import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeSalesBackgroundPageComponent } from './see-sales-background-page/see-sales-background-page.component';
import { SeeSalesPageRoutingModule } from './see-sales-page-routing.module';



@NgModule({
  declarations: [
    SeeSalesBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    SeeSalesPageRoutingModule
  ]
})
export class SeeSalesPageModule { }
