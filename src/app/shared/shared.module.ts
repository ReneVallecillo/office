import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CovalentDataTableModule } from '@covalent/core';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        MaterialModule.forRoot(),
        CovalentDataTableModule.forRoot(),
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [MaterialModule, CovalentDataTableModule, CommonModule, ReactiveFormsModule],
    declarations: [],
    providers: [],
})
export class SharedModule { }
