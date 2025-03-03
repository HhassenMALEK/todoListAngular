import { Component, inject,  signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Users, User } from '../../models/users';

@Component({
  selector: 'app-connection',
  imports: [FormsModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css',
})
export class ConnectionComponent {
  userService = inject(UserService);

  user : User = {id: '', name: '', password: '', type: '', email: ''};
  
  loginButton=  signal<string>('login');
  userConnected = false
  username =  signal<string>('');
  password = signal<string>('');
  
  login() {

    if (!this.userConnected) {

      this.userService.findByUserName(this.username()).subscribe(data => {
        console.log("data username" + data.name);
        this.user = data;
      });
      console.log("User :" + this.user.name + " Password : " + this.user.password + " Username : " + 
        this.username() + " Password : " + this.password() + " UserConnected : " + this.userConnected);
      if (this.user.password === this.password()) {
        this.userConnected = true;
        this.loginButton.set('logout')
      }
      else {
        alert('Login failed');
      }
    } else {
     
    }
  }
}
