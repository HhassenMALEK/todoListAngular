import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';


export const routes: Routes = [
  {path : "home", component: AppComponent},
  {path : "/users", 
    children:[
      {path :"", component: UserListComponent},
      {path : "id", component: UserDetailComponent},
      {path : "id/todos", component: TodoListComponent},
      {path : "id/todos/:id", component: TodoDetailComponent},
    ],
  },
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path:"**", redirectTo: "/home", pathMatch: "full"}
];
