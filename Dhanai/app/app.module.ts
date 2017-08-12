import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { NavComponent } from './nav/nav.component';
import {
  EventService,
  EventDetailComponent,
  NewEventComponent,
  EventRouteActivatorGuard
} from './event/index';
import { ToastrService } from './common/toastr.service';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { EmployeeService } from './employee/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventComponent,
    NavComponent,
    EventDetailComponent,
    NewEventComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    EventService,
    ToastrService,
    EmployeeService,
    EventRouteActivatorGuard,
    {
      provide: 'canDeactivateNewEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
function checkDirtyState(component: NewEventComponent) {
  if (component.isDirty) {
    return window.confirm('Are you sure want to more without saving data ');
  }
  return true;
}
