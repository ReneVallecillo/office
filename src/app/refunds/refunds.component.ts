import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITdDataTableColumn, TdDataTableComponent } from '@covalent/core';
import { RefundService } from './refunds.service';
import { Refund } from '../models/';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss']
})
export class RefundsComponent implements OnInit {
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
  }


  onSubmit() {
    let data: Refund = this.prepareSave();
    this.refundService.addRefunds(data)
      .subscribe(
      refund => { this.data.push(refund); this.dataTable.refresh();},
      error => console.log(error),
    );
    this.add = !this.add;
    
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
