import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '../../_services';
import { Account } from '../../_models';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  accounts!: any[];
  firstAccount?: any;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(accounts => {
        this.accounts = accounts;
        this.firstAccount = accounts[0];
      });
  }

  deleteAccount(id: string) {
    const account = this.accounts.find(x => x.id === id);
    account.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.accounts = this.accounts.filter(x => x.id !== id));
  }

  toggleActivation(id: string) {
    const account = this.accounts.find(x => x.id === id);
    account.isToggling = true;
    this.accountService.toggleActivation(id)
      .pipe(first())
      .subscribe({
        next: (response) => {
          account.active = response.active;
          account.isToggling = false;
        },
        error: error => {
          console.error(error);
          account.isToggling = false;
        }
      });
  }
}