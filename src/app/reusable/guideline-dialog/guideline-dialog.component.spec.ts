import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelineDialogComponent } from './guideline-dialog.component';

describe('GuidelineDialogComponent', () => {
  let component: GuidelineDialogComponent;
  let fixture: ComponentFixture<GuidelineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuidelineDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
