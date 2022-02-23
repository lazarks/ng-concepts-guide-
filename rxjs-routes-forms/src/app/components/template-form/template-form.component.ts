import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  @ViewChild('f') signUpForm!: NgForm;
  submitted = false;
  user = {
    username: '',
    email: '',
    gender: '',
  };

  constructor() {}

  ngOnInit(): void {}

  @HostListener('document:keyup', ['$event']) hanelKeyboardEvent(
    event: KeyboardEvent
  ) {
    if (event.key == '+') {
      this.fillValues();
    }
  }

  fillValues() {
    this.signUpForm.form.patchValue({
      loginData: {
        email: 'lazar@gmail.com',
        username: 'lzr123',
      },
      // gender: "male" // setValue must include all cntls
    });
  }

  onFormSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.loginData.username;
    this.user.email = this.signUpForm.value.loginData.email;
    this.user.gender = this.signUpForm.value.gender;
    console.log(this.user);
    this.signUpForm.reset();
  }
}
