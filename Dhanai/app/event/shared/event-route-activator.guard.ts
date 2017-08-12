import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventService } from './event.service';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const exists = !!this.eventService.getEvent(+next.params['id']);
    if (!exists) {
      this.router.navigate(['/error']);
    }
    return exists;
  }
}
