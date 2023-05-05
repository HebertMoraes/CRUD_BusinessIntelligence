import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsBackgroundPageComponent } from './cars-background-page/cars-background-page.component';
import { CarsPageRoutingModule } from './cars-page-routing.module';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';



@NgModule({
  declarations: [
    CarsBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    CarsPageRoutingModule, 
    ComponentesComunsModule
  ]
})
export class CarsPageModule { }
