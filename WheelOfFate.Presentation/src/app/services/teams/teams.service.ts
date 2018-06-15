import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl: string = environment.apiUrl + 'teams';
  
  constructor(private http: HttpClient) { }


  getShifts(teamId, month, year): Observable<any> {
    let data = {
      TeamId: teamId,
      Month: month,
      Year: year
    };
    return this.http.post(this.apiUrl + '/shifts', data);
  }


}
