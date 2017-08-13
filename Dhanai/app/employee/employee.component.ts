import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'yo-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: any[];

  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe(employees => { this.employees = employees; });
  }

}
