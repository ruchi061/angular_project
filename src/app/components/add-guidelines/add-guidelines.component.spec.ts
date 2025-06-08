import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuidelinesComponent } from './add-guidelines.component';

describe('AddGuidelinesComponent', () => {
  let component: AddGuidelinesComponent;
  let fixture: ComponentFixture<AddGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGuidelinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
