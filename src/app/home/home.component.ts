import { Component, OnInit } from '@angular/core';

import {User} from '../models/user'
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = []
  constructor(private UserService:UserService) { }

  ngOnInit() {
    this.UserService.getUsers()
      .subscribe(users => {
        this.users = users;
      })
  }
}
