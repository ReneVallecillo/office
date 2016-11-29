import { Component, OnInit } from '@angular/core';

import {User} from '../models/user'
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcome: string = 'Welcome to Office';
  slogan: string = 'We love improving your productivity';

  currentUser: User;
  users: User[] = []
  constructor(private UserService:UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers(){
    this.UserService.getAll().subscribe(
      users => { this.users = users.content; console.log(users); }
    )
  }

  private deleteUser(id) {
    this.UserService.delete(id).subscribe(
      () => { this.loadAllUsers() }
    )
  }
}
