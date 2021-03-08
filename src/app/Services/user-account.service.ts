import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserAccount } from '../Models/UserAccount';
import { HttpClient, HttpParams } from '@angular/common/http';

const API = environment.ApiUrl;

@Injectable()
export class UserAccountService {

  constructor(private http: HttpClient) { }

  registerUser(userAccount: UserAccount): Observable<UserAccount> {
    return this.http.post<UserAccount>(API + 'account/cadastro', userAccount);  
  }

  login(userAccount: UserAccount): Observable<UserAccount> {
    return this.http.post<UserAccount>(API + "account/login", userAccount);
  }

}
