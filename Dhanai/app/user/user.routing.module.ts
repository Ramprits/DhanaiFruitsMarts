import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login.component';


export const UserRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
];



