import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningBackgroundPageComponent } from './opening-background-page/opening-background-page.component';

const routes: Routes = [
  { path: '', component: OpeningBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpeningPageRoutingModule { }