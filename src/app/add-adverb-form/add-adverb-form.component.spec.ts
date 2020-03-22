import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdverbFormComponent } from './add-adverb-form.component';

describe('AddAdverbFormComponent', () => {
  let component: AddAdverbFormComponent;
  let fixture: ComponentFixture<AddAdverbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdverbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdverbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
