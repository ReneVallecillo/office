
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


import { SharedService } from './shared.service';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    private domain = 'http://localhost:8080';
    constructor(
        private http: Http,
        private sharedService: SharedService
    ) { }

    getAll() {
        return this.http.get(this.domain + '/api/v1/users',
            this.sharedService.getJWT()).map((response: Response) => response.json());
    }

    getById(id) {
        return this.http.get(this.domain + '/api/v1/users/' + id, this.sharedService.getJWT).map((response: Response) => response.json());
    }

    create(user) {
        return this.http.post(this.domain + '/api/v1/users', user, this.sharedService.getJWT).map((response: Response) => response.json());
    }

    update(user) {
        return this.http.put(this.domain + '/api/v1/users/' +
            user.id, user, this.sharedService.getJWT).map((response: Response) => response.json());
    }

    delete(id) {
        return this.http.delete(this.domain + '/api/v1/users/' + id,
            this.sharedService.getJWT).map((response: Response) => response.json());
    }
}
