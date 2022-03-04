import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean;
  isLoading: boolean;
  error: string;

  constructor(private authService: AuthService) {
    this.isLoginMode = true;
    this.isLoading = false;
    this.error = '';
  }

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }

    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      // login req
      authObs = this.authService.login(
        authForm.value.email,
        authForm.value.password
      );
    } else {
      // signUp
      authObs = this.authService.signUp(
        authForm.value.email,
        authForm.value.password
      );
    }

    // error handling
    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
      },
      (errorMsg) => {
        this.error = errorMsg;
        this.isLoading = false;
      }
    );
  }
}
