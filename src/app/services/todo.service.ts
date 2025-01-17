import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly http = inject(HttpClient);
  private readonly url = 'http://localhost:3000/todos';

  private _todos: Todo[] = [];

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
 
}
