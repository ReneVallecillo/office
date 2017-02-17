import { NgModule } from '@angular/core';

import { RefundsComponent } from './refunds.component';
import { RefundsRoutingModule } from './refunds-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RefundService } from './refunds.service';
import { RefundDetailComponent } from './refund-detail/refund-detail.component';
import { RefundListComponent } from './refund-list/refund-list.component';

@NgModule({
    imports: [RefundsRoutingModule, SharedModule],
    exports: [],
    declarations: [RefundsComponent, RefundDetailComponent, RefundListComponent],
    providers: [RefundService],
})
export class RefundsModule { }
