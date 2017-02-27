/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CovalentDataTableModule } from '@covalent/core';
import { RouterTestingModule } from '@angular/router/testing';

import { RefundListComponent } from './refund-list.component';
import { RefundService } from '../refunds.service';
import { RefundStub } from '../../../testing';

describe('RefundListComponent', () => {
  let component: RefundListComponent;
  let fixture: ComponentFixture<RefundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefundListComponent],
      imports: [MaterialModule, ReactiveFormsModule, CovalentDataTableModule, RouterTestingModule],
      providers: [
        { provide: RefundService, useClass: RefundStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(RefundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
