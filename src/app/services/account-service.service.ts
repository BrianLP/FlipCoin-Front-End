import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Account } from '../account/account.component';
import { Transactions } from '../transactions/transactions.component';
import { Observable, of } from 'rxjs';
import { AccountListComponent } from '../account-list/account-list.component';
import { User } from '../models/user'
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private accountsUrl: string;
  private storedId: number;
  private currentUser: User


  constructor(private http: HttpClient,
    private userService: UserService) {
    this.accountsUrl = 'https://zipbank-delightful-parrot-qa.cfapps.io/API';

  }
  public findAll(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountsUrl + '/accounts/all_accounts');
  }
  public getAccountById(accountNumber: number): Observable<Account> {

    return this.http.get<Account>(this.accountsUrl + '/accounts/' + accountNumber);
  }

  public save(account: Account) {
    return this.http.post<Account>(this.accountsUrl + '/accounts/dummy_created', account);

  }
  public remove(id: Number) {
    return this.http.delete<Account[]>(this.accountsUrl + '/accounts/' + id);
  }
  public getAccountsByUserId(): Observable<Account[]> {
    const id = sessionStorage.getItem('userId');
    return this.http.get<Account[]>(this.accountsUrl+'/user/'+id+'/accounts');
  }
  public accountDeposit(transaction: Transactions) {
    return this.http.put<Account>(this.accountsUrl + '/accounts/deposit/', transaction);
  }
  public accountWithdraw(transaction: Transactions) {
    return this.http.put<Account>(this.accountsUrl + '/accounts/withdraw/', transaction);
  }
  public transferSender(transaction: Transactions) {
    return this.http.put<Account>(this.accountsUrl + '/accounts/transferSender/', transaction);
  }
  public transferRecipient(transaction: Transactions) {
    return this.http.put<Account>(this.accountsUrl + '/accounts/transferRecipient/', transaction);
  }

  public getStoredId(): number {
    return this.storedId;
  }
  public setStoredId(id: number) {
    this.storedId = id;
  }

}
