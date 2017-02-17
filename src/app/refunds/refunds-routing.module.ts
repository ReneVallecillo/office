import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefundsComponent } from './refunds.component';
import { RefundDetailComponent } from './refund-detail/refund-detail.component';
import { RefundListComponent } from './refund-list/refund-list.component'

export const refundsRoutes: Routes = [
    {
        path: 'refunds',
        component: RefundsComponent,
        children: [
            {
                path: '',
                component: RefundListComponent,
            },
            {
                path: ':id',
                component: RefundDetailComponent
            }
        ]
    },
];

@NgModule({
    // imports: [RouterModule.forChild(refundsRoutes)],
    imports: [],
    exports: [RouterModule],
})
export class RefundsRoutingModule { }

