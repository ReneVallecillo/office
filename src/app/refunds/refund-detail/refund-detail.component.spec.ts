/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CovalentDataTableModule } from '@covalent/core';
import { RefundService } from '../refunds.service';
import { RefundStub } from '../../../testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../testing';
import { RouterTestingModule } from '@angular/router/testing';


import { RefundDetailComponent } from './refund-detail.component';

describe('RefundDetailComponent', () => {
  let component: RefundDetailComponent;
  let fixture: ComponentFixture<RefundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefundDetailComponent],
      imports: [MaterialModule, ReactiveFormsModule, CovalentDataTableModule,
      RouterTestingModule ],
      providers: [
        { provide: RefundService, useClass: RefundStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
