import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';



@NgModule({
    imports: [
        MaterialModule.forRoot()
    ],
    exports: [MaterialModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
