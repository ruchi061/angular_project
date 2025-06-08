import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { AlertService } from '../../services/alert.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ResourceShelterAlertComponent } from '../../reusable/resource-shelter-alert/resource-shelter-alert.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
})
export class AlertsComponent {
  alerts: { city: string; category: string; message: string }[] = [];
  loading = true;
  locationCity!: string;
  errorMessage = '';

  constructor(
    private locationService: LocationService,
    private dialog: MatDialog,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.locationService
      .getCurrentLocation()
      .then((location) => {
        console.log("city",location.city);
        this.alerts = this.alertService.getAlertsForCity(location.city);
        // console.log(this.alerts);
        this.locationCity = location.city;
        console.log("Location city",this.locationCity);
        this.alertService.getLength();
        this.loading = false;
      })
      .catch((error) => {
        this.errorMessage = 'Unable to fetch location';
        this.loading = false;
      });
  }

  onAlertClick(disasterName: string) {
    this.router.navigate(['disaster/', disasterName]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ResourceShelterAlertComponent, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      width: '50vw',
      height: 'auto',
      data: { location: this.locationCity },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
