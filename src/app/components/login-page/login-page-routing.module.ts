import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBackgroundPageComponent } from './login-background-page/login-background-page.component';

const routes: Routes = [
  { path: '', component: LoginBackgroundPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPageRoutingModule { }
