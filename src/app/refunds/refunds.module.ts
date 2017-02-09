import { NgModule } from '@angular/core';

import { RefundsComponent } from './refunds.component';
import { RefundsRoutingModule } from './refunds-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [RefundsRoutingModule, SharedModule],
    exports: [],
    declarations: [RefundsComponent],
    providers: [],
})
export class RefundsModule { }
