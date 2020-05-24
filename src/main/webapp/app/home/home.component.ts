import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { LoginModalService } from 'app/core/login/login-modal.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { ScheduleService } from 'app/core/tvmaze/schedule.service';
import { JhiAlertService, JhiAlert } from 'ng-jhipster';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  account: Account | null = null;
  authSubscription?: Subscription;
  todayEpisodes?: any;
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  alerts: JhiAlert[] = [];

  constructor(
    private accountService: AccountService, 
    private loginModalService: LoginModalService,
    private scheduleService: ScheduleService,
    private alertService: JhiAlertService) {}

  ngOnInit(): void {
    
    this.authSubscription = this.accountService.getAuthenticationState().subscribe(account => (this.account = account));
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
    this.scheduleService.getScheduleByCountryAndDate().subscribe(schedule => {
      this.todayEpisodes = schedule;
      this.collectionSize = this.todayEpisodes.length;
    });
  }

  lookupShow(id:any): void{
    
  }
}
