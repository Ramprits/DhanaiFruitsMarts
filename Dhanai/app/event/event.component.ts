import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'yo-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  events: any[];
  constructor(private eventService: EventService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

}
