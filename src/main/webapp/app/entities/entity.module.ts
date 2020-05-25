import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ENTITY_ROUTE } from './entity.route';
import { CommonModule } from '@angular/common';
import { MemflixSharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(
      ENTITY_ROUTE
    ),
    CommonModule,
    MemflixSharedModule
  ],
  declarations: [ShowDetailsComponent]
})
export class MemflixEntityModule {}
