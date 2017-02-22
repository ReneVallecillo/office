import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITdDataTableColumn, TdDataTableComponent } from '@covalent/core';
import { RefundDetail, Refund } from '../../models';
import { RefundService } from '../refunds.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MdSnackBar } from '@angular/material';


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
  detail: RefundDetail = null;
  addSign = '+';
  refund$: Observable<Refund>;
  refundId: number;
  refundSum = 0;
  max = 20000;

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
    public snackBar: MdSnackBar,
  ) { }

  ngOnInit() {
    this.route.params.subscribe
      ((params: Params) => {
        this.getDetails(params['id']);
        this.refundId = params['id'];
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getDetails(id: number) {
    this.refundService.getDetails(id)
      .subscribe(details => {
        this.data = details;
        this.refundSum = this.calculateSum(this.data);
      });
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

  onSubmit() {
    this.detail = this.prepareSave();
    if (this.checkMax(this.detail.amount)) {
      this.refundService.addDetail(this.detail)
        .flatMap((detail: RefundDetail) => {
          return this.refundService.getDetails(detail.refund_id);
        }).subscribe((details: RefundDetail[]) => {
          this.data = details;
          this.refundSum = this.calculateSum(this.data);
          this.dataTable.refresh();
          this.toogleAdd();
        });
    } else {
      this.openSnackBar('El reembolso supera lo permitido: ' + this.max, 'Cerrar');
    }
  }

  toogleAdd() {
    this.addSign = this.add ? '+' : '-';
    this.add = !this.add;
  }

  calculateSum(data: RefundDetail[]): number {
    let sum = 0;
    for (let row of data) {
      sum += row.amount;
    }
    return sum;
  }

  checkMax(latest: number): boolean {
    if (this.calculateSum(this.data) + latest > this.max) {
      return false;
    } else {
      return true;
    }
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
      refund_id: this.refundId,
    };

    return saveDetail;
  }
}
