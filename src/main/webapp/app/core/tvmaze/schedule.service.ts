import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TV_MAZE_API_URL } from 'app/app.constants';


export interface ScheduleQuery{
  date?:string
}

export class Schedule implements ScheduleQuery{
  constructor(
    public date?: string
  ){
  }
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  SCHEDULE_PATH = '/schedule';
  constructor(private http: HttpClient) {}

  getScheduleByCountryAndDate(date:string): Observable<Object>{
    return this.http.get(TV_MAZE_API_URL + this.SCHEDULE_PATH,
      {
        params: new HttpParams().set('country','US')
        .set('date',date)
      } );
  }
}
