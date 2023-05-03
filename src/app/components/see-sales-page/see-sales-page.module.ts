import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeSalesBackgroundPageComponent } from './see-sales-background-page/see-sales-background-page.component';
import { SeeSalesPageRoutingModule } from './see-sales-page-routing.module';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { SeeSalesBlockComponent } from './see-sales-block/see-sales-block.component';



@NgModule({
  declarations: [
    SeeSalesBackgroundPageComponent,
    SeeSalesBlockComponent
  ],
  imports: [
    CommonModule, 
    SeeSalesPageRoutingModule, 
    ComponentesComunsModule    
  ]
})
export class SeeSalesPageModule { }
