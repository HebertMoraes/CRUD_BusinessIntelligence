import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSaleBackgroundPageComponent } from './create-sale-background-page/create-sale-background-page.component';

const routes: Routes = [
  { path: '', component: CreateSaleBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateSalePageRoutingModule { }
