import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'yo-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employee: any;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.employeeService.getEmployee(+this.route.snapshot.params['employeeId'])
      .subscribe(employees => { this.employee = employees; });
  }

}
