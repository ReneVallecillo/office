import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITdDataTableColumn, TdDataTableComponent } from '@covalent/core';
import { RefundService } from '../refunds.service';
import { Refund } from '../../models/';

import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-refund-list',
  templateUrl: './refund-list.component.html',
  styleUrls: ['./refund-list.component.scss']
})
export class RefundListComponent implements OnInit {

  add = false;
  data: Refund[];
  tmp: Refund[];
  refundForm: FormGroup;
  refund: Refund = null;
  addSign = '+';
  formAction = 'Agregar';
  @ViewChild('mydata') dataTable: TdDataTableComponent;

  columns: ITdDataTableColumn[] = [
    { name: 'id', label: 'ID' },
    { name: 'amount', label: 'Monto', numeric: true },
    { name: 'date', label: 'Fecha Cierre' },
    { name: 'check_number', label: 'Numero de Cheque' },
  ];

  constructor(
    private refundService: RefundService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getRefunds();
    this.refundForm = this.generateForm();
  }

  getRefunds() {
    this.refundService.getRefunds()
      .subscribe(refunds => this.data = refunds);
  }

  selectEvent(event) {
    if (event.selected) {
      this.refund = event.row;
    } else {
      this.refund = null;
    }
  }

  editRefund() {
    this.formAction = 'Editar';
    this.refundForm.setValue({
      amount: this.refund.amount,
      date: this.refund.date,
      check_number: this.refund.check_number,
      comments: this.refund.comments ? this.refund.comments : '',
      reviewed: this.refund.reviewed ? this.refund.reviewed : false,
    });

    if (!this.add) {
      this.toogleAdd();
    }
  }

  showDetail() {
    this.router.navigate([this.refund.id], { relativeTo: this.route });
  }

  toogleAdd() {
    this.addSign = this.add ? '+' : '-';
    this.add = !this.add;
    if (this.refund == null) {
      this.refundForm.reset();
    }
  }

  onSubmit() {
    if (this.refund) { //edit
      this.refund = this.prepareSave(0);
      this.updateRefund();
    } else {
      this.refund = this.prepareSave(1);
      this.createRefund();
    }


  }

  private generateForm(): FormGroup {
    return this.fb.group({
      amount: '',
      date: '',
      check_number: '',
      comments: '',
      reviewed: ''
    });
  }

  private createRefund() {
    this.refundService.addRefunds(this.refund)
      .flatMap((refund: Refund) => {
        return this.refundService.getRefunds();
      }).subscribe((refunds: Refund[]) => {
        this.data = refunds;
        this.dataTable.refresh();
        this.toogleAdd();
        this.formAction = 'Agregar';
      });
  }

  private updateRefund() {
    this.refundService.updateRefunds(this.refund)
      .flatMap((refund: Refund) => {
        return this.refundService.getRefunds();
      }).subscribe((refunds: Refund[]) => {
        this.data = refunds;
        this.dataTable.refresh();
        this.toogleAdd();
        this.formAction = 'Agregar';
      });
  }

  private prepareSave(next: number): Refund {
    const formModel = this.refundForm.value;

    const saveRefund: Refund = {
      id: next > 0 ? this.data.length + next : this.refund.id,
      amount: formModel.amount as number,
      date: formModel.date as string,
      check_number: formModel.check_number,
      comments: formModel.comments,
      reviewed: formModel.reviewed,
    };

    return saveRefund;
  }

}
