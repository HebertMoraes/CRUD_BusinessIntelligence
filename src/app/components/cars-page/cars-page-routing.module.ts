import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsBackgroundPageComponent } from './cars-background-page/cars-background-page.component';

const routes: Routes = [
  { path: '', component: CarsBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsPageRoutingModule { }
