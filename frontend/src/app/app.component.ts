﻿import { Component } from '@angular/core';

import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({
    selector: 'app', templateUrl: 'app.component.html',
    standalone: false
})
export class AppComponent {
    Role = Role;
    account: Account;
    title = 'user-management-system';

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    logout() {
        this.accountService.logout();
    }
}