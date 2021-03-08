import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AccountComponent } from './account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountRoutingModule } from './account.routing.module';
import { UserAccountService } from '../Services/user-account.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    NgbModule,
    AccountRoutingModule,
  ],
  providers: [UserAccountService]
})
export class AccountModule { }
