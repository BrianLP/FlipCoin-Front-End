import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  getUser(username: string) : Observable<User>{
    return this.http.get<User>(this.url + "user/get/" + username);
  }
}