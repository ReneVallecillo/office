/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RefundsComponent } from './refunds.component';

describe('RefundsComponent', () => {
  let component: RefundsComponent;
  let fixture: ComponentFixture<RefundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
