import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Injectable()
export class UserService {

    private domain:string ='http://localhost:8080'
    constructor(
        private http:Http,
        private authService: AuthenticationService
    ) { }

    getUsers(): Observable<User[]>{
        let headers = this.authService.jwt() 

        return this.http.get(this.domain + '/api/v1/users', headers)
            .map((response:Response) => response.json());
    }
}