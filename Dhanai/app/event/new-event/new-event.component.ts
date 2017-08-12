import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'yo-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  constructor(private router: Router) { }
  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;
  reset() {
    this.router.navigate(['/events']);
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // ...our form is valid, we can submit the data
    }

  }

}
