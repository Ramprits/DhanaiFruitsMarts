import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { employeeRouting } from './employee.routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeGuard } from './share/employee.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRouting)
  ],
  declarations: [EmployeeComponent, EmployeeDetailComponent],
  providers: [EmployeeGuard]
})
export class EmployeeModule { }
