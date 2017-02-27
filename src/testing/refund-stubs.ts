import { Component, Directive, Injectable, Input } from '@angular/core';


// Only implements refund
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class RefundStub {
    private subject = new BehaviorSubject(this.testRefund);
    refund = this.subject.asObservable();

    // Test parameters
    private _testRefund: {};
    get testRefund() { return this._testRefund; }
    set testRefund(refund: {}) {
        this._testRefund = refund;
        this.subject.next(refund);
    }

    getRefunds(refunds:Array<{}>) {
        this.testRefund = refunds;
        return this.refund;
    }
}