import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingInPage } from './sing-in.page';

describe('SingInPage', () => {
  let component: SingInPage;
  let fixture: ComponentFixture<SingInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingInPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
