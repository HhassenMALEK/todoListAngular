import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';
import { User } from '../../models/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
  loginForm = {
    name: '',
    password: ''
  };
  
  error = "";  
  
  user: User | null = null; 
  
  //userService = inject(UserService);
  constructor(private userService: UserService) {}
  
  
  // onSubmit(){
  //   if (this.login()){
  //     this.error = "";
  //     this.loginForm = {  name: '', password: ''};
  //     this.use= [...this.userService, isLoggedIn: true];
  
  //   } else {
  //     this.error = "Login failed";
  //   }
  // }

  onSubmit() {
    const { name, password } = this.loginForm;

    this.userService.findByUserName(name).subscribe({
      next: (users) => {
        if (users.length > 0 && users[0].password === password) {
          this.user = users[0];
          this.user.isLoggedIn = true; // Mettez à jour l'état de l'utilisateur
          this.error = '';
          alert('Login successful');
        } else {
          this.error = 'Invalid username or password';
        }
      },
      error: () => {
        this.error = 'An error occurred. Please try again.';
      }
    });
  }

  // login() {
  //  const pseudo = this.LoginForm.name;
  //   const password = this.LoginForm.password;
  //   return this.user.name === name  && this.userService.password === password;
  // }

  // logout() {
  //   this.user = {...this.user,isLoggedIn: false}; 
  // }

  logout() {
    if (this.user) {
      this.user.isLoggedIn = false; // Mettez à jour l'état de connexion
      this.user = null;
      alert('Logged out successfully');
    }
  }
}
