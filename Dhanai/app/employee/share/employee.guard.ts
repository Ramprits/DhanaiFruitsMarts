import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EmployeeService } from '../employee.service';

@Injectable()
export class EmployeeGuard implements CanActivate {
  constructor(private employeeService: EmployeeService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const employeeExists = !!this.employeeService.getEmployee(+next.params['employeeId']);
    if (!employeeExists) {
      this.router.navigate(['/error']);
    }
    return employeeExists;
  }
}
