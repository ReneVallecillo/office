import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITdDataTableColumn, TdDataTableComponent } from '@covalent/core';
import { RefundDetail, Refund } from '../../models';
import { RefundService } from '../refunds.service';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-refund-detail',
  templateUrl: './refund-detail.component.html',
  styleUrls: ['./refund-detail.component.scss']
})
export class RefundDetailComponent implements OnInit {
  add = false;
  data: RefundDetail[];
  tmp: RefundDetail[];
  detailForm: FormGroup;
  detail: RefundDetail;
  addSign = '+';
  refund$: Observable<Refund>;
  @ViewChild('mydata') dataTable: TdDataTableComponent;

  columns: ITdDataTableColumn[] = [
    { name: 'id', label: 'ID' },
    { name: 'amount', label: 'Monto', numeric: true },
    { name: 'date', label: 'Fecha Cierre' },
    { name: 'reference', label: 'Referencia(Cheque)' },
    { name: 'provider', label: 'Proveedor' },
  ];

  constructor(
    private refundService: RefundService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe
      ((params: Params) => {
        this.getDetails(params['id']);
      });
    this.detailForm = this.generateForm();
  }

  selectEvent(event) {
    if (event.selected) {
      this.detail = event.row;
    } else {
      this.detail = null;
    }
  }

  getDetails(id: number) {
    this.refundService.getDetails(id)
      .subscribe(details => { this.data = details.details; });
    this.refund$ = this.refundService.getRefund(id);
  }

  editDetail() {
    this.detailForm.setValue({
      amount: this.detail.amount,
      date: this.detail.date,
      provider: this.detail.provider,
      reference: this.detail.reference,
    });
    this.add = !this.add;
  }

  save() {
    this.refundService.addDetail(this.prepareSave());
  }

  toogleAdd() {
    this.addSign = this.add ? '+' : '-';
    this.add = !this.add;
  }

  private generateForm(): FormGroup {
    return this.fb.group({
      amount: '',
      date: '',
      provider: '',
      reference: '',
    });
  }

  private prepareSave(): RefundDetail {
    const formModel = this.detailForm.value;

    const saveDetail: RefundDetail = {
      id: formModel.id ? formModel.id : formModel.length + 1,
      amount: formModel.amount as number,
      date: formModel.date as string,
      provider: formModel.provider as string,
      reference: formModel.reference as string,
    };

    return saveDetail;
  }
}
