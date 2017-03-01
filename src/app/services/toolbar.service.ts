import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToolbarService {

    subject: BehaviorSubject<boolean> = new BehaviorSubject(true);
    showToolbar$ = this.subject.asObservable();

    constructor() { }

    hideToolbar() {
        this.subject.next(false);
    }
}
