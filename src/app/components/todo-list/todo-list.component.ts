import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todos } from '../../models/todo';
import {  RouterLink } from '@angular/router';

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

  todos = signal<Todos>([]);

  ngOnInit(): void {
    this.todoService.findAll().subscribe(data => {
      this.todos.set(data);
    });
  }

}
