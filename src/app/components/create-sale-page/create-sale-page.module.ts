import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSaleBackgroundPageComponent } from './create-sale-background-page/create-sale-background-page.component';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { CreateSalePageRoutingModule } from './create-sale-page-routing.module';
import { CreateSaleBlockComponent } from './create-sale-block/create-sale-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateSaleBackgroundPageComponent,
    CreateSaleBlockComponent
  ],
  imports: [
    CommonModule, 
    ComponentesComunsModule, 
    CreateSalePageRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class CreateSalePageModule { }
