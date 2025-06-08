import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceShelterListComponent } from './resource-shelter-list.component';

describe('ResourceShelterListComponent', () => {
  let component: ResourceShelterListComponent;
  let fixture: ComponentFixture<ResourceShelterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceShelterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceShelterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
