import { NgModule } from '@angular/core';

import { RefundsComponent } from './refunds.component';
import { RefundsRoutingModule } from './refunds-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RefundService } from './refunds.service';

@NgModule({
    imports: [RefundsRoutingModule, SharedModule],
    exports: [],
    declarations: [RefundsComponent],
    providers: [RefundService],
})
export class RefundsModule { }
