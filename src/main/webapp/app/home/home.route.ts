import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { Filtering } from 'app/core/tvmaze/filters.service';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
