import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundBackgroundPageComponent } from './not-found-background-page/not-found-background-page.component';

const routes: Routes = [
  { path: '', component: NotFoundBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundPageRoutingModule { }
