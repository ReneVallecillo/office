
import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http'

@Injectable()
export class SharedService {

    constructor() { }

      //getJWT returns the jwt from the localStorage
      getJWT(): RequestOptions{
         // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}