import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllDesignBackgroundPageComponent } from './all-design-background-page/all-design-background-page.component';
import { ComponentesComunsModule } from '../componentes-comuns/componentes-comuns.module';
import { AllDesignPageRoutingModule } from './all-design-page-routing.module';



@NgModule({
  declarations: [
    AllDesignBackgroundPageComponent
  ],
  imports: [
    CommonModule, 
    ComponentesComunsModule, 
    AllDesignPageRoutingModule
  ]
})
export class AllDesignPageModule { }
