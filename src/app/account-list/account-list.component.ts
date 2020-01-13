import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account/account.component'
import { AccountService } from '../services/account-service.service'
import { ActivatedRoute, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { User, AuthenticationService } from 'app/services/authentication.service';


@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @Input() user: User;
  accounts: Account[];
  selectedAccount:Account;
  overview:number = 1; 

  constructor(
    private accountService:AccountService,
    private route: ActivatedRoute, 
    private router: Router,
    private authService:AuthenticationService
    ) { }

  ngOnInit() {
   this.getUserAccounts();
  }
  getUserAccounts()  {
    this.accountService.getAccountsByUserId().subscribe(data => {this.accounts = data;
    });
  }
  remove(id : Number){
    this.accountService.remove(id).subscribe(result => {this.gotoAccountsList()});
  }
  gotoAccountsList() {
    this.router.navigate(['accounts']);
  }
  onSelect(account: Account): void {
    this.selectedAccount = account;
  }
  storeId(id:number){
    this.accountService.setStoredId(id);
    this.router.navigateByUrl('accountsOverview')
  }
  
  


}
