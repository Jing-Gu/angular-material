import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(f);
  }
}