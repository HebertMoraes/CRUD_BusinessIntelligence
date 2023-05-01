import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFrameComponent } from './login-frame/login-frame.component';
import { LoginBackgroundPageComponent } from './login-background-page/login-background-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page-routing.module';


@NgModule({
  declarations: [
    LoginFrameComponent,
    LoginBackgroundPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ], 
  exports: [
    LoginFrameComponent,
    LoginBackgroundPageComponent,
  ]
})
export class LoginPageModule { }
