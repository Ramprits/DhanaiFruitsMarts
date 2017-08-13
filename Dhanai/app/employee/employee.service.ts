import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {
    handleError: any;
    baseUrl = 'http://localhost:51383/api/EmployeesData';
    constructor(private http: Http) { }
    getEmployees(): Observable<any[]> {
        return this.http.get(this.baseUrl)
            .map((response: Response) => response.json());
    }
    getEmployee(employeeId: number) {
        const url = `${this.baseUrl}/${employeeId}`;
        return this.http.get(url)
            .map((response: Response) => response.json());
    }
}
