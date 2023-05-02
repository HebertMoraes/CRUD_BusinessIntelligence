import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardBackgroundPageComponent } from './dashboard-background-page/dashboard-background-page.component';

const routes: Routes = [
  { path: '', component: DashboardBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
