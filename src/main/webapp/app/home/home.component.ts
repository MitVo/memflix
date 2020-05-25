import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { ScheduleService } from 'app/core/tvmaze/schedule.service';
import { JhiAlertService, JhiAlert } from 'ng-jhipster';
import { FiltersService, Filtering } from 'app/core/tvmaze/filters.service';
import { HttpResponse } from '@angular/common/http';
import { Show } from 'app/core/tvmaze/show.model';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  shows?: any;
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  alerts: JhiAlert[] = [];
  filterObject: Filtering;
  searchingForm = this.fb.group({
    inputKey: [undefined],
  });
  date: string = moment().format('YYYY-MM-DD');

  constructor(
    private accountService: AccountService, 
    private loginModalService: LoginModalService,
    private scheduleService: ScheduleService,
    private alertService: JhiAlertService,
    private filteringService: FiltersService,
    private fb: FormBuilder) {
      this.filterObject = new Filtering;
    }

  ngOnInit(): void {
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
    this.filterObject = new Filtering;
    this.schedule();
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  login(): void {
    this.loginModalService.open();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  schedule(): void {
    this.scheduleService.getScheduleByCountryAndDate(this.date).subscribe(schedule => {
      this.shows = schedule;
      this.collectionSize = this.shows.length;
    });
  }

  filteringBy(): void {
    this.filterObject.q = this.searchingForm.get(['inputKey'])!.value; 
    this.filteringService.filterBy(this.filterObject).subscribe(
      (res: HttpResponse<Show[]>) => {
        this.shows = res.body;
      }
    );
  }

}
