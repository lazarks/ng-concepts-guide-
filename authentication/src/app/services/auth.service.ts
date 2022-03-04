import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';

export interface AuthResponseData {
  id: string;
  email: string;
  refreshToken: string;
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
      .pipe(catchError(this.getErrorHandler));
  }

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${env.API_URL}:signUp?key=${env.API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.getErrorHandler));
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
