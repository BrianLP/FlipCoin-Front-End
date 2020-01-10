import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../models/notes';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { User } from 'app/models/user';
import { UserService } from './user.service';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  user: any = new User();

  private url: string =  "https://zipbank-delightful-parrot-qa.cfapps.io/API";

  constructor(
    private http:HttpClient, 
    private authenticate: AuthenticationService
    
    ) { }

  getNotes(): Observable<Notes[]>{
    return this.http.get<Notes[]>(this.url + "/" + sessionStorage.getItem("userId") + "/notes");
  }

  removeNotes(id): Observable<Notes[]> {
    return this.http.delete<Notes[]>(this.url + "/notes/" + id + "/delete");
  } 

  save(note : Notes){
    return this.http.post<Notes>(this.url + "/" + sessionStorage.getItem("userId") + "/note", note);
  }

  update(id, note: Notes){
    return this.http.put<Notes[]>(this.url + "/notes/" + id, note);

  }

}
