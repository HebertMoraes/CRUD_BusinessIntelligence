import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCarsBackgroundPageComponent } from './manage-cars-background-page/manage-cars-background-page.component';

const routes: Routes = [
  { path: '', component: ManageCarsBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCarsPageRoutingModule { }
