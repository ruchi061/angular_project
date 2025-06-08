import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisasterService } from '../../services/disaster.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-resource-shelter-alert',
  imports: [MatToolbarModule, MatPaginatorModule, MatCardModule, MatDividerModule, MatTableModule],
  templateUrl: './resource-shelter-alert.component.html',
  styleUrl: './resource-shelter-alert.component.css',
})

export class ResourceShelterAlertComponent {

  shelters = new MatTableDataSource<any>();
  resources = new MatTableDataSource<any>();

  constructor(
    public dialogRef: MatDialogRef<ResourceShelterAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { location: string },
    private disasterServ:DisasterService
  ) {}

  ngOnInit(){
    this.disasterServ.getResources().subscribe((data) => {
      this.resources.data = data[0].resources;
      this.resources.data = this.resources.data.filter((resource)=> resource.location.district.toLowerCase() == this.data.location.toLowerCase());
    });

    this.disasterServ.getShelters().subscribe((data) => {
      this.shelters.data = data[0].shelters;
      this.shelters.data = this.shelters.data.filter((resource)=> resource.location.district.toLowerCase() == this.data.location.toLowerCase());
    });
  }

}
