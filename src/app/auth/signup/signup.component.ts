import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {

  maxDate;
  constructor() {}

  ngOnInit(): void{
    // today
    this.maxDate = new Date();
    // max year will be 18 years ago
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(f: NgForm): void {
    console.log(f);
  }
}
