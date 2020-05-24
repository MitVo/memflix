import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TV_MAZE_API_URL } from 'app/app.constants';
import * as moment from 'moment';
import { Schedule } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  SCHEDULE_PATH = '/schedule';
  constructor(private http: HttpClient) {}

  getScheduleByCountryAndDate(): Observable<Object>{
    const date = moment();
    return this.http.get(TV_MAZE_API_URL + this.SCHEDULE_PATH,
      {
        params: new HttpParams().set('country','US')
        .set('date',moment().format('YYYY-MM-DD'))
      } );
  }
}
