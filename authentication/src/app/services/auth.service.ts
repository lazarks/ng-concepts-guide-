import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { User } from '../components/shared/user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userSub = new BehaviorSubject<User>(null!);
  clearTimeout: any;

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    this.userSub.next(null!);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');

    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
  }

  autoLogout(expirationDate: number) {
    setTimeout(() => {
      this.logout();
    }, expirationDate);
  }

  autoLogin() {
    let userData: {
      email: string;
      _token: string;
      expirationDate: string;
      localId: string;
    } = JSON.parse(localStorage.getItem('userData')!);
    if (!userData) return;

    let user = new User(
      userData.email,
      userData.localId,
      userData._token,
      new Date(userData.expirationDate)
    );
    if (user.token) {
      this.userSub.next(user);
    }

    let date = new Date().getTime();
    let expirationDate = new Date(userData.expirationDate).getTime();
    this.autoLogout(expirationDate);
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `${env.API_URL}:signInWithPassword?key=${env.API_KEY}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${env.API_URL}:signUp?key=${env.API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)));
  }

  private handleUser(response: AuthResponseData) {
    let expireDate = new Date(
      new Date().getTime() + +response.expiresIn * 1000
    );
    let user = new User(
      response.email,
      response.localId,
      response.idToken,
      expireDate
    );

    this.userSub.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogout(+response.expiresIn * 1000);
  }

  getErrorHandler(errorRes: HttpErrorResponse) {
    let errorMsg = 'An Error Ocurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'Email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'Email not found!';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'Invalid password!';
        break;
    }
    return throwError(errorMsg);
  }
}
