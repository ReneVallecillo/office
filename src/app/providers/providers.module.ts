import { NgModule } from '@angular/core';

import { ProvidersComponent } from './providers.component';
import { ProvidersRoutingModule} from './providers-routing.module'

@NgModule({
    imports: [ProvidersRoutingModule],
    exports: [],
    declarations: [ProvidersComponent],
    providers: [],
})
export class ProvidersModule { }
