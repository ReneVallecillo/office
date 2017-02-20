import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';

const reportRoutes: Routes = [
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(reportRoutes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule { }
