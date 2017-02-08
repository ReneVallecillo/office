import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProfileComponent }   from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
    imports: [SharedModule, ProfileRoutingModule],
    exports: [],
    declarations: [ProfileComponent],
    providers: [],
})
export class ProfileModule { }
