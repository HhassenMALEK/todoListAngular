import { Component, inject , OnInit, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService} from '../../services/user.service'
import { Users } from '../../models/users';
import {RouterLink } from '@angular/router';


@Component({
  selector: 'app-user-list',
  imports: [
    FormsModule,
   RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  userService = inject(UserService);

  users =signal<Users>([]) ;

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users.set(data);
    });
  }

  
}
