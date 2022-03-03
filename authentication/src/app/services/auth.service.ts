import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.post<AuthResponseData>(
      `${env.API_URL}?key=${env.API_KEY}`,

      {
        email,
        password,
        returnSecureToken: true,
      }
    );
  }
}
