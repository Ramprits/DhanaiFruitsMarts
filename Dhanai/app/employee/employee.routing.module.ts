
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeGuard } from './share/employee.guard';

export const employeeRouting: Routes = [
    { path: 'employees', component: EmployeeComponent },
    {
        path: 'employees/:employeeId',
        component: EmployeeDetailComponent, canActivate: [EmployeeGuard]
    }
];

