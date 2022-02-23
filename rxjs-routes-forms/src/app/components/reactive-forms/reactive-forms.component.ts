import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  restrictedNames = ['Lazar'];
  signUpForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.isRestrictedNames.bind(this),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl(null),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  onAddHobby() {
    let control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  isRestrictedNames(control: FormControl) {
    if (this.restrictedNames.includes(control.value)) {
      return { nameIsRestricted: true };
    }

    return null;
  }
}
