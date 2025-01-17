import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  {path : "home", component: HomeComponent},
  {path : "users", 
    children:[
      {path :"", component: UserListComponent},
      {path : ":userid", component: UserDetailComponent},
      {path : ":userid/todos", component: TodoListComponent},
      {path : ":userid/todos/:todoid", component: TodoDetailComponent},
    ],
  },
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path:"**", redirectTo: "/home"}
];
