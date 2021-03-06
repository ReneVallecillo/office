import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  login(){
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        data => { this.router.navigate(['/']); },
        error => {
          this.alertService.error(error);
          this.loading = false;
      });
    }
  }
