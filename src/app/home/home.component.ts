import { Component, OnInit } from '@angular/core';

import {User} from '../models/user'
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
