import { Component, OnInit } from '@angular/core';
import { ToolbarService } from '../services/';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private toolbarService: ToolbarService) { }

  ngOnInit() {
    this.toolbarService.hideToolbar();
  }

  printPage() {
  }

}
