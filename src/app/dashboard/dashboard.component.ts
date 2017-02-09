import { Component, OnInit, ViewChild } from '@angular/core';
import { MdSidenav} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;


  constructor() { }

  ngOnInit() {
  }

}
