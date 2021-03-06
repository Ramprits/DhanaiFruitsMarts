import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { ErrorComponent } from './error/error.component';
import {
  EventDetailComponent,
  NewEventComponent,
  EventRouteActivatorGuard
} from './event/index';
const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'events/new', component: NewEventComponent, canDeactivate: ['canDeactivateNewEvent'] },
  { path: 'events', component: EventComponent },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
  { path: 'employee', loadChildren: 'app/employee/employee.module#EmployeeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
