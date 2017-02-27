/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

import { RegisterComponent } from './register.component';

import { ActivatedRouteStub, RouterLinkStubDirective, UserStub } from '../../testing';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let activatedRoute: ActivatedRouteStub;

  class RouterStub {
    navigateByUrl(url: string) { return url; }
  }

  let alertServiceStub = {
    alter: { error: 'Error msg' }
  }

  class DummyComponent { }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent, RouterLinkStubDirective],
      imports: [MaterialModule.forRoot(), FormsModule,
      RouterTestingModule.withRoutes(
        [
          { path: 'login', component: DummyComponent }
        ]
      )
      ],
      providers: [
        { provide: UserService, useClass: UserStub },
        { provide: AlertService, useValue: alertServiceStub },
        { provide: ActivatedRoute, useValue: ActivatedRouteStub }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
