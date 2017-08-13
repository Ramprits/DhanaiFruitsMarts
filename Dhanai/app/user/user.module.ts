import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
