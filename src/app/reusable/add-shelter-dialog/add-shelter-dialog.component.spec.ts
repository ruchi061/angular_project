import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelterDialogComponent } from './add-shelter-dialog.component';

describe('AddShelterDialogComponent', () => {
  let component: AddShelterDialogComponent;
  let fixture: ComponentFixture<AddShelterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddShelterDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShelterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
