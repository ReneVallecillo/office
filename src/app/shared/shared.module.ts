import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CovalentDataTableModule } from '@covalent/core';



@NgModule({
    imports: [
        MaterialModule.forRoot(),
        CovalentDataTableModule.forRoot(),
        CommonModule,
    ],
    exports: [MaterialModule, CovalentDataTableModule, CommonModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
