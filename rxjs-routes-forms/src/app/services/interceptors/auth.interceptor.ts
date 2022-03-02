import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedRequest = request.clone({
      headers: request.headers.append('auth-inter', 'abc'),
      params: request.params.append('custom-param-interp', '123123'),
    });

    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log(event);
        console.log('Response from interceptor');
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
