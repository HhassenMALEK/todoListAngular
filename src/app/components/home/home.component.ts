import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-home',
  imports: [
   RouterLink,
   UserListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
