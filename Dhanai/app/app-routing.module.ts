import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { NewEventComponent } from './event/new-event/new-event.component';
import { ErrorComponent } from './error/error.component';
import { EventRouteActivatorGuard } from './event/shared/event-route-activator.guard';

const routes: Routes = [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'events/new', component: NewEventComponent },
  { path: 'events', component: EventComponent },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorGuard] },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
