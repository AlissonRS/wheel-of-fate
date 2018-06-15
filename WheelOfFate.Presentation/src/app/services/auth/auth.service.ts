import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  getAuthorizationToken(): string {
    return localStorage.getItem('auth_token');
  }
  private _loggedIn = false;
  private loginApiUrl: string = environment.apiUrl + 'login';

  constructor(private router : Router, private http: HttpClient) {
    this._loggedIn = !!this.getAuthorizationToken();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(this._loggedIn) {
      return true;
    }
    this.redirectToLogin(state.url);
    return;
  }

  login(usuario: string, senha: string): Observable<any> {

    let data = {
      "UserName": usuario,
      "Password": senha
    };
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.loginApiUrl, data, httpOptions)
    .map((data: any) => {
      if (data.authenticated) {
        localStorage.setItem('auth_token', data.accessToken);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("userLogin", data.userLogin);
        localStorage.setItem("userId", data.userId);
        this._loggedIn = true;
      }
      return data;
    });

  }

  logoff() {
    localStorage.removeItem("auth_token");
    this._loggedIn = false;
    this.redirectToLogin('');
  }

  redirectToLogin(returnUrl) {
    this.router.navigate(['/login'],{ queryParams: { returnUrl: returnUrl }});
  }

}
