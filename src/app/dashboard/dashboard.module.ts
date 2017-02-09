import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routes.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [DashboardRoutingModule, SharedModule],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
