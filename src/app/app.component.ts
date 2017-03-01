import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarService } from './services/';
import { Router, UrlSegment, NavigationEnd } from '@angular/router';
import { MdToolbar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Office';
  showToolbar = true;


  constructor(private toolbarService: ToolbarService,
    private router: Router) {
  }

  ngOnInit() {
    console.log(this.router.url);
    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .map(e => this.router.url)
      .subscribe(
      url => this.hideToolbar(url)
      );
    this.toolbarService.showToolbar$.subscribe(
      visible => {
        console.log(visible);
      });
  }

  hideToolbar(url: string) {
    if (url.indexOf('reports') > -1) {
      this.showToolbar = false;
    } else {
      this.showToolbar = true;
    }

  }
}


