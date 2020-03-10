import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingFieldComponent } from './adding-field.component';

describe('AddingFieldComponent', () => {
  let component: AddingFieldComponent;
  let fixture: ComponentFixture<AddingFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
