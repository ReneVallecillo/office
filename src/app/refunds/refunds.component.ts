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

  constructor() { }

  ngOnInit() {

  }
}
