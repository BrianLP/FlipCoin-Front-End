import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BillComponent } from '../bill/bill.component';
import { BillListComponent } from '../bill-list/bill-list.component'
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class BillService {

  private accountsUrl: string;

  constructor(private http: HttpClient) {
    this.accountsUrl = 'http://localhost:8080/API';
  }

  public findAll(): Observable<BillComponent[]> {
    return this.http.get<BillComponent[]>(this.accountsUrl + '/bills/all_bills');
  }
  public getBillById(billId: number): Observable<BillComponent> {
    return this.http.get<BillComponent>(this.accountsUrl + '/bills/' + billId);
  }
  public save(bills: BillComponent) {
    return this.http.post<BillComponent>(this.accountsUrl + '/bills/create_bill', bills);
  }
  public remove(id: Number) {
    return this.http.delete<BillComponent[]>(this.accountsUrl + '/bills/delete/' + id);
  }
}