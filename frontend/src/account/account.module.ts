import { NqModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';

@NqModule({  
    imports: [  
    CommonModule,  
    ReactiveFormsModule,  
    AccountsRoutingModule ],  
    declarations: [  
    ListComponent,  
    AddEditComponent ] })  
export class AccountsModule { }