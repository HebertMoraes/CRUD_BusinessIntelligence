import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsBackgroundPageComponent } from './cars-background-page/cars-background-page.component';
import { CarsPageRoutingModule } from './cars-page-routing.module';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { CarBlockComponent } from './car-block/car-block.component';



@NgModule({
  declarations: [
    CarsBackgroundPageComponent,
    CarBlockComponent
  ],
  imports: [
    CommonModule, 
    CarsPageRoutingModule, 
    ComponentesComunsModule, 
    LazyLoadImageModule
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }], // <-- Declare that you want to use ScrollHooks
})
export class CarsPageModule { }
