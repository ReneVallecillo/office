import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router:Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    //TODO: this is for reference
    this.authService.logout();
  }

  login(){
    this.loading = true;
    this.authService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if(result === true){
          this.router.navigate(['/']);
        }else{
          this.error = " Username or password is incorrect ";
          this.loading = false;
        }
      });
  }

}
