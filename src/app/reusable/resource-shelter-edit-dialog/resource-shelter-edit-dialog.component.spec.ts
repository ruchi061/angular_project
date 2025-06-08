import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceShelterEditDialogComponent } from './resource-shelter-edit-dialog.component';

describe('ResourceShelterEditDialogComponent', () => {
  let component: ResourceShelterEditDialogComponent;
  let fixture: ComponentFixture<ResourceShelterEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceShelterEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceShelterEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
