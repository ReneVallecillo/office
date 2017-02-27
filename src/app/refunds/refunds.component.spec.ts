/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { RefundsComponent } from './refunds.component';

describe('RefundsComponent', () => {
  let component: RefundsComponent;
  let fixture: ComponentFixture<RefundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefundsComponent],
      imports: [RouterTestingModule]
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
