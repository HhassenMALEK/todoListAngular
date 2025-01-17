import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ConnectionComponent } from '../connection/connection.component';


@Component({
  selector: 'app-home',
  imports: [
   RouterLink,
   ConnectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
