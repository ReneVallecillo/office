import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITdDataTableColumn, TdDataTableComponent } from '@covalent/core';
import { RefundDetail } from '../../models';
import { RefundService } from '../refunds.service';
import { ActivatedRoute, Params } from '@angular/router';



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
  @ViewChild('mydata') dataTable: TdDataTableComponent;

  columns: ITdDataTableColumn[] = [
    { name: 'id', label: 'ID' },
    { name: 'amount', label: 'Monto', numeric: true },
    { name: 'date', label: 'Fecha Cierre' },
    { name: 'reference', label: 'Referencia(Cheque)' },
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
  }

  getDetails(id: number) {
    console.log(id);
    this.refundService.getDetails(id)
      .subscribe(details => { this.data = details.details; console.log(details); });
  }

}
