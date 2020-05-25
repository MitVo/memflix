import { Routes, Resolve } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';


export const ENTITY_ROUTE: Routes = [
    {
    path: 'show-detail/:id',
    component: ShowDetailsComponent,
    data: {
      authorities: [],
      pageTitle: 'tvmaze.show'
    }
  }
];