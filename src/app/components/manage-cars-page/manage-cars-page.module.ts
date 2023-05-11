import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCarsBackgroundPageComponent } from './manage-cars-background-page/manage-cars-background-page.component';
import { ManageCarsPageRoutingModule } from './manage-cars-page-routing.module';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';
import { CarEditDeleteBlockComponent } from './car-edit-delete-block/car-edit-delete-block.component';
import { CarCreateFormsComponent } from './car-create-forms/car-create-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarUpdateFormsComponent } from './car-update-forms/car-update-forms.component';



@NgModule({
  declarations: [
    ManageCarsBackgroundPageComponent, 
    CarEditDeleteBlockComponent, CarCreateFormsComponent, CarUpdateFormsComponent
  ],
  imports: [
    CommonModule, 
    ManageCarsPageRoutingModule, 
    ComponentesComunsModule, 
    LazyLoadImageModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }], // <-- Declare that you want to use ScrollHooks
})
export class ManageCarsPageModule { }
