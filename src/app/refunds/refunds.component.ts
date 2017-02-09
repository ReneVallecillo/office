import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';
const NUMBER_FORMAT: any = (v: { value: number }) => v.value;
const DECIMAL_FORMAT: any = (v: { value: number }) => v.value.toFixed(2);

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.scss']
})
export class RefundsComponent implements OnInit {
  add: boolean = false;

  columns: ITdDataTableColumn[] = [
    { name: 'id', label: 'ID' },
    { name: 'amount', label: 'Monto', numeric: true, format: v => v.toFixed(2) },
    { name: 'date', label: 'Fecha Cierre' },
    { name: 'check_number', label: 'Numero de Cheque' },
  ];

  data: any[] = [
    {
      'id': 1,
      'amount': 1985.32,
      'date': '02/07/2017',
      'check_number': '0123456789'
    },
    {
      'id': 2,
      'amount': 1922.21,
      'date': '02/01/2017',
      'check_number': '0123456789'
    },
    {
      'id': 3,
      'amount': 1981.30,
      'date': '02/11/2017',
      'check_number': '0123456789'
    },
    {
      'id': 4,
      'amount': 1985.05,
      'date': '02/22/2017',
      'check_number': '0123456789'
    },
  ];



  constructor() { }

  ngOnInit() {
  }

  selectEvent(event) {

  }

  save(){
    this.add = !this.add;
  }

}
