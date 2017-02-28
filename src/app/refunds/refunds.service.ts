import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Refund, RefundDetail } from '../models/';

import 'rxjs/add/operator/map';

@Injectable()
export class RefundService {
    private _serviceUrl = 'http://localhost:3000/'; //api endpoint
    constructor(private http: Http) { }

    getRefunds(): Observable<Refund[]> {
        const url = this._serviceUrl + 'refunds';
        return this.http.get(url)
            .map(this.extractData);
    }

    getRefund(id: number): Observable<Refund> {
        const url = this._serviceUrl + 'refunds/' + id;
        return this.http.get(url)
            .map(this.extractData);
    }

    addRefunds(refund: Refund): Observable<Refund> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(
            this._serviceUrl + 'refunds',
            JSON.stringify(refund),
            options
        )
            .map(this.extractData)
            .catch(this.handleError);

    }

    updateRefunds(refund: Refund): Observable<Refund> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(
            this._serviceUrl + 'refunds/' + refund.id,
            JSON.stringify(refund),
            options
        )
            .map(this.extractData)
            .catch(this.handleError);

    }

    createDetail(detail: RefundDetail): Observable<RefundDetail> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(
            this._serviceUrl + 'refunddetail',
            JSON.stringify(detail),
            options
        ).map(this.extractData)
            .catch(this.handleError);
    }

    updateDetail(detail: RefundDetail): Observable<RefundDetail> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(
            this._serviceUrl + 'refunddetail/' + detail.id,
            JSON.stringify(detail),
            options
        ).map(this.extractData)
            .catch(this.handleError);
    }


    getDetails(id: number): Observable<RefundDetail[]> {
        const url = this._serviceUrl + 'refunddetail?refund_id=' + id;
        return this.http.get(url)
            .map(this.extractData);

    }


    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
