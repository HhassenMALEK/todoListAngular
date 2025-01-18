import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Users, User } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);
  private readonly url = 'http://localhost:3000/users';


  findAll(): Observable<Users>{
    return this.http.get<Users>(this.url);
  }

  // findByUserName(username: string): Observable<User> {
  //    const urlname = this.url+'?name='+username;    
  //    console.log("dans service : "+urlname);
  //    return this.http.get<User>(urlname);
  //  }

  findByUserName(username: string): Observable<User[]> {
    const urlname = `${this.url}?name=${username}`;
    return this.http.get<User[]>(urlname);
  }
  

}
