import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todos } from '../../models/todo';
import {  RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoService = inject(TodoService);
  private readonly route = inject(ActivatedRoute);

  userId! :string;
  todos = signal<Todos>([]);

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userid'];

  
    // récupération des todos de Json filtrés par utilisateurs
    this.todoService.findByUser(this.userId).subscribe(data => {
      this.todos.set(data);
    });

  }

}
