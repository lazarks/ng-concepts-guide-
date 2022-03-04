import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
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
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `${env.API_URL}:signInWithPassword?key=${env.API_KEY}`,
        { email, password, returnSecureToken: true }
      )
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser));
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${env.API_URL}:signUp?key=${env.API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.getErrorHandler), tap(this.handleUser));
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
