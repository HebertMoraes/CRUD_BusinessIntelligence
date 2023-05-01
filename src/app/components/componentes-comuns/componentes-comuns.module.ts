import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DesignThumbComponent } from './design-thumb/design-thumb.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DesignThumbComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    HeaderComponent, 
    DesignThumbComponent
  ]
})
export class ComponentesComunsModule { }
