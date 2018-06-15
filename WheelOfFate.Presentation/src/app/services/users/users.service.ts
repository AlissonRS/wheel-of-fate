import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private meApiUrl: string = environment.apiUrl + 'me';

  constructor(private http: HttpClient) {
  }

  getUser(): any {
    return {
      'UserId': localStorage.getItem('userId'),
      'UserLogin': localStorage.getItem('userLogin'),
      'UserName': localStorage.getItem('userName'),
    }
  }

  getTeams(): Observable<any> {
    // let token = localStorage.getItem('auth_token');
    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization':  'Bearer ' + token
    //   })
    // };
    return this.http.get(this.meApiUrl + '/teams');
  }

}
