import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { employeeRouting } from './employee.routing.module';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(employeeRouting)
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
