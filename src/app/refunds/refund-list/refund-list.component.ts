import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITdDataTableColumn, TdDataTableComponent } from '@covalent/core';
import { RefundService } from '../refunds.service';
import { Refund } from '../../models/';

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
  refund: Refund;
  @ViewChild('mydata') dataTable: TdDataTableComponent

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
    this.router.navigate([this.refund.id], {relativeTo: this.route});
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

  private prepareSave(): Refund {
    const formModel = this.refundForm.value;

    const saveRefund: Refund = {
      id: this.data.length + 1,
      amount: formModel.amount as number,
      date: formModel.date as string,
      check_number: formModel.check_number
    };

    return saveRefund;
  }

}
