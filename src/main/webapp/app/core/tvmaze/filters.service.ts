import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { TV_MAZE_API_URL } from 'app/app.constants';
import { Pagination, createRequestOption } from 'app/shared/util/request-util';
import { Observable } from 'rxjs';
import { Show } from './show.model';

export interface FilteringQuery{
  q?:string
}

export class Filtering implements FilteringQuery{
  constructor(
    public q?: any
  ){
  }
}

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  SEARCH_SHOW_PATH = '/search/shows';
  constructor(private http: HttpClient) { }

  filterBy (req:FilteringQuery) : Observable<HttpResponse<Show[]>> {
    const params: HttpParams = createRequestOption(req);
    return this.http.get<Show[]>(`${TV_MAZE_API_URL+this.SEARCH_SHOW_PATH}`, {
      params,
      observe: 'response'
    });
  }

}
