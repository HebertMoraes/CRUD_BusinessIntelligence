import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCarsBackgroundPageComponent } from './manage-cars-background-page/manage-cars-background-page.component';
import { ManageCarsPageRoutingModule } from './manage-cars-page-routing.module';



@NgModule({
  declarations: [
    ManageCarsBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    ManageCarsPageRoutingModule
  ]
})
export class ManageCarsPageModule { }
