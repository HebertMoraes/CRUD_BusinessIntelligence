import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeSalesBackgroundPageComponent } from './see-sales-background-page/see-sales-background-page.component';
import { SeeSalesPageRoutingModule } from './see-sales-page-routing.module';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { SeeSalesBlockComponent } from './see-sales-block/see-sales-block.component';
import { UpdateSaleBlockComponent } from './update-sale-block/update-sale-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SeeSalesBackgroundPageComponent,
    SeeSalesBlockComponent,
    UpdateSaleBlockComponent
  ],
  imports: [
    CommonModule, 
    SeeSalesPageRoutingModule, 
    ComponentesComunsModule, 
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class SeeSalesPageModule { }
