import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVerbFormComponent } from './add-verb-form.component';

describe('AddVerbFormComponent', () => {
  let component: AddVerbFormComponent;
  let fixture: ComponentFixture<AddVerbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVerbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVerbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
