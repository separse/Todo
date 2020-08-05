/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClient2Component } from './http-client2.component';

describe('HttpClient2Component', () => {
  let component: HttpClient2Component;
  let fixture: ComponentFixture<HttpClient2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpClient2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClient2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
