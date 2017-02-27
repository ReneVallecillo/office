import { Component, Directive, Injectable, Input } from '@angular/core';


// Only implements user
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserStub {
    private subject = new BehaviorSubject(this.testUser);
    user = this.subject.asObservable();

    // Test parameters
    private _testUser: {};
    get testUser() { return this._testUser; }
    set testUser(user: {}) {
        this._testUser = user;
        this.subject.next(user);
    }

    create(user: {}) {
        this.testUser = user;
        return this.user;
    }
}