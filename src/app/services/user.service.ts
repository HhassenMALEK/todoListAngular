import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly http = inject(HttpClient);
  private readonly url = 'http://localhost:3000/users';

  private _users: Users= [];

  findAll(): Observable<Users>{
    return this.http.get<Users>(this.url);
  }

  

}
