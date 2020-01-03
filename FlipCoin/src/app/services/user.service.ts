import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get<any>(this.url + "user/get/" +username);
    } 
  getUserId(username: string){
    return this.http.get<any>(this.url + "user/get/" + username).pipe(map(
      userData => {
        sessionStorage.setItem('userId', userData.userId);
      }
    ));
 }
}
