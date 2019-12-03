import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginselectionPage } from './loginselection.page';

describe('LoginselectionPage', () => {
  let component: LoginselectionPage;
  let fixture: ComponentFixture<LoginselectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginselectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginselectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
