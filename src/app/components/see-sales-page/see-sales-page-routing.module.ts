import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeSalesBackgroundPageComponent } from './see-sales-background-page/see-sales-background-page.component';

const routes: Routes = [
  { path: '', component: SeeSalesBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeeSalesPageRoutingModule { }
