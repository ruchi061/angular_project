import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ResourceShelterEditDialogComponent } from '../../reusable/resource-shelter-edit-dialog/resource-shelter-edit-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { AddResourceDialogComponent } from '../../reusable/add-resource-dialog/add-resource-dialog.component';
import { AddShelterDialogComponent } from '../../reusable/add-shelter-dialog/add-shelter-dialog.component';
import { DisasterService, Resource, Shelter } from '../../services/disaster.service';

@Component({
  selector: 'app-resource-shelter-list',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatPaginatorModule,
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule

],
  templateUrl: './resource-shelter-list.component.html',
  styleUrls: ['./resource-shelter-list.component.css'],
})
export class ResourceShelterListComponent  {
  searchQuery: string = '';
  resources: any[] = [];
  shelters: any[] = [];
  dataSourceResources = new MatTableDataSource<Resource>();
  dataSourceShelters = new MatTableDataSource<Shelter>();

  displayedColumnsResources = ['name', 'quantity', 'location', 'actions'];
  displayedColumnsShelters = [
    'name',
    'capacity',
    'availableBeds',
    'location',
    'actions',
  ];

  @ViewChild('paginatorResources') paginatorResources!: MatPaginator;
  @ViewChild('paginatorShelters') paginatorShelters!: MatPaginator;

  constructor(
    private disaServ: DisasterService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadResources();
    this.loadShelters();

    // Custom filtering for resources
    this.dataSourceResources.filterPredicate = (data: Resource, filter: string) => {
      const lowerCaseFilter = filter.toLowerCase();

      // Check if the name matches
      const nameMatch = data.name.toLowerCase().includes(lowerCaseFilter);

      // Check if any part of the location matches
      const locationMatch =
        data.location.street.toLowerCase().includes(lowerCaseFilter) ||
        data.location.district.toLowerCase().includes(lowerCaseFilter) ||
        data.location.state.toLowerCase().includes(lowerCaseFilter) ||
        data.location.country.toLowerCase().includes(lowerCaseFilter);

      // Return true if either name or any part of the location matches
      return nameMatch || locationMatch;
    };

    // Custom filtering for shelters
    this.dataSourceShelters.filterPredicate = (data: Shelter, filter: string) => {
      const lowerCaseFilter = filter.toLowerCase();

      // Check if the name matches
      const nameMatch = data.name.toLowerCase().includes(lowerCaseFilter);

      // Check if any part of the location matches
      const locationMatch =
        data.location.street.toLowerCase().includes(lowerCaseFilter) ||
        data.location.district.toLowerCase().includes(lowerCaseFilter) ||
        data.location.state.toLowerCase().includes(lowerCaseFilter) ||
        data.location.country.toLowerCase().includes(lowerCaseFilter);

      // Return true if either name or any part of the location matches
      return nameMatch || locationMatch;
    };
  }

  ngAfterViewInit() {
    this.dataSourceResources.paginator = this.paginatorResources;
    this.dataSourceShelters.paginator = this.paginatorShelters;
  }

  loadResources() {
    this.disaServ.getResources().subscribe((data) => {
      this.resources = data[0].resources;
      console.log(this.resources);
      this.dataSourceResources.data = data[0].resources;
    });
  }

  loadShelters() {
    this.disaServ.getShelters().subscribe((data) => {
      this.shelters = data[0].shelters;
      this.dataSourceShelters.data = data[0].shelters;
    });
  }

  editResource(resource: Resource) {
    const dialogRef = this.dialog.open(ResourceShelterEditDialogComponent, {
      width: '400px',
      data: { ...resource, type: 'resource' },
    });

    dialogRef.afterClosed().subscribe((updatedData) => {
      if (updatedData) {
        // this.resourceService
        //   .updateResource(resource.id!, updatedData)
        //   .subscribe(() => {
        //     this.loadResources();
        //     this.snackBar.open('Resource updated successfully', 'Close', {
        //       duration: 2000,
        //     });
        //   });
      }
    });
  }

  editShelter(shelter: Shelter) {
    const dialogRef = this.dialog.open(ResourceShelterEditDialogComponent, {
      width: '400px',
      data: { ...shelter, type: 'shelter' },
    });

    dialogRef.afterClosed().subscribe((updatedData) => {
      if (updatedData) {
        // this.shelterService
        //   .updateShelter(shelter.id!, updatedData)
        //   .subscribe(() => {
        //     this.loadShelters();
        //     this.snackBar.open('Shelter updated successfully', 'Close', {
        //       duration: 2000,
        //     });
        //   });
      }
    });
  }

  deleteResource(id: number) {
    // this.resourceService.deleteResource(id).subscribe(() => {
    //   this.loadResources();
    //   this.snackBar.open('Resource deleted successfully', 'Close', {
    //     duration: 2000,
    //   });
    // });
  }

  deleteShelter(id: number) {
    // this.shelterService.deleteShelter(id).subscribe(() => {
    //   this.loadShelters();
    //   this.snackBar.open('Shelter deleted successfully', 'Close', {
    //     duration: 2000,
    //   });
    // });
  }

  openAddResourceDialog() {
    const dialogRef = this.dialog.open(AddResourceDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if (result) {
      //   this.resourceService.addResource(result).subscribe(() => {
      //     this.loadResources(); // Reload table after adding
      //   });
      // }
    });
  }

  openAddShelterDialog() {
    const dialogRef = this.dialog.open(AddShelterDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // if (result) {
      //   this.shelterService.addShelter(result).subscribe(() => {
      //     this.loadShelters(); // Reload table after adding
      //   });
      // }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.searchQuery = filterValue;
    this.dataSourceResources.filter = filterValue;
    this.dataSourceShelters.filter = filterValue;
  }
}
