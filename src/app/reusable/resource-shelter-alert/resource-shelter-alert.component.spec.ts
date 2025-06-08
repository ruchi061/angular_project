import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceShelterAlertComponent } from './resource-shelter-alert.component';

describe('ResourceShelterAlertComponent', () => {
  let component: ResourceShelterAlertComponent;
  let fixture: ComponentFixture<ResourceShelterAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceShelterAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceShelterAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
