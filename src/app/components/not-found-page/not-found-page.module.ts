import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundBackgroundPageComponent } from './not-found-background-page/not-found-background-page.component';
import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';



@NgModule({
  declarations: [
    NotFoundBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    NotFoundPageRoutingModule, 
    ComponentesComunsModule
  ]
})
export class NotFoundPageModule { }
