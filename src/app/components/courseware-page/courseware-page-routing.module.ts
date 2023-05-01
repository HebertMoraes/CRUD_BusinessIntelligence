import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursewareBackgroundPageComponent } from './courseware-background-page/courseware-background-page.component';

const routes: Routes = [
  { path: '', component: CoursewareBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursewarePageRoutingModule { }