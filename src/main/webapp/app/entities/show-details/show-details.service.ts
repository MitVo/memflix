import { Injectable } from '@angular/core';
import { TV_MAZE_API_URL } from 'app/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from 'app/core/tvmaze/show.model';
import { Episode, ISeason } from 'app/core/tvmaze/season.model';
import { Cast } from 'app/core/tvmaze/cast.model';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {
  SHOW_PATH = '/shows';
  SEASON_PATH = '/seasons';
  EPISODES_PATH = '/episodes';
  CAST_PATH = '/cast'

  constructor(private http: HttpClient) { }

  findById (id:any): Observable<Show> {
    return this.http.get<Show>(`${TV_MAZE_API_URL+this.SHOW_PATH}/${id}`);
  }

  findSeasons (id:any): Observable<ISeason[]> {
    return this.http.get<ISeason[]>(`${TV_MAZE_API_URL+this.SHOW_PATH}/${id}${this.SEASON_PATH}`);
  }

  findEpisodes (id:any): Observable<Episode[]>{
    return this.http.get<Episode[]>(`${TV_MAZE_API_URL+this.SEASON_PATH}/${id}${this.EPISODES_PATH}`);
  }

  findCast (id:any): Observable<Cast[]> {
    return this.http.get<Cast[]>(`${TV_MAZE_API_URL+this.SHOW_PATH}/${id}${this.CAST_PATH}`);
  }

}
