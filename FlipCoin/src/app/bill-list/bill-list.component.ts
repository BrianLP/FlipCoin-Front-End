import { Component, OnInit } from '@angular/core';
import { BillComponent } from '../bill/bill.component'
import { BillService } from '../services/bill-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BillDetailsComponent } from '../bill-details/bill-details.component';
import { UserService} from '../services/user.service';
import { AuthenticationService, User } from '../services/authentication.service'


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {
  total: number;
  bills: BillComponent[];
  bill: BillComponent;
  selectedBill: BillComponent;
  storedId:number;
  user:User;
  currentDate:Date = new Date
 

  constructor(
    private billService: BillService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authenticate: AuthenticationService,
    ) { }

  ngOnInit() {

    this.billService.findAll().subscribe(data => {
    this.bills = data;
    this.billTotal();
    });
    this.userService.getUser(this.authenticate.getUser()).subscribe(e => this.user = e);
    
    
  }
  gotoBillsList() {
    this.router.navigate(['bills']);
  }
  remove(id : number){
    this.billService.remove(id).subscribe(result => {this.gotoBillsList()});
  }
  onSelect(bill: BillComponent): void {
    this.selectedBill = bill;
  }
  billTotal(){
    for (let bill of this.bills){
      this.total+=bill.amount;
    }
  }
  storeNumber(id:number){
  this.billService.setStoreId(id);
  this.router.navigateByUrl('billDetails');
  console.log(id);
  }

  lateCheck(date:string):boolean{
     if (this.currentDate > new Date(date)) {
      console.log(new Date(date));
      console.log(new Date());
      return true;
    }else{
     
      return false;
    }
  }

}
