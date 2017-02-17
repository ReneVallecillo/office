import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { refundsRoutes } from '../refunds/refunds-routing.module';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            ...refundsRoutes,
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
