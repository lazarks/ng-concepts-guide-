import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment as env } from 'src/environments/environment';

interface AuthResponseData {
  id: string;
  email: string;
  refreshToken: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${env.API_URL}?key=${env.API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorRes) => {
          let errorMsg = 'An Error Ocurred';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMsg);
          }

          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMsg = 'Email already exists!';
          }
          return throwError(errorMsg);
        })
      );
  }
}
