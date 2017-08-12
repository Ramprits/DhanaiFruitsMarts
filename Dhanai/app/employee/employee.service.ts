import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    baseUrl = 'http://localhost:51383/api/Employees';
    constructor(private http: Http) { }
    getEmployees() {
        return this.http.get(this.baseUrl)
            .map((response: Response) => response.json());
    }
    getEmployee(employeeId: number) {
        const url = `{this.baseUrl}/${employeeId}`;
        return this.http.get(url)
            .map((response: Response) => response.json());
    }
}
