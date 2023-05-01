import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDesignBackgroundPageComponent } from './all-design-background-page/all-design-background-page.component';

const routes: Routes = [
  { path: '', component: AllDesignBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllDesignPageRoutingModule {

}