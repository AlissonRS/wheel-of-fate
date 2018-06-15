import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';
import { AuthService } from '../services/auth/auth.service';
import { Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(private injector: Injector) { }

  addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { 'Authorization': 'Bearer ' + token }})
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    let authService = this.injector.get(AuthService);

    return next.handle(this.addToken(req, authService.getAuthorizationToken())).do((event: HttpEvent<any>) => {},
    (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          authService.logoff();
        }
      }
    });
  }

}
