import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-add-shelter-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-shelter-dialog.component.html',
  styleUrl: './add-shelter-dialog.component.css',
})
export class AddShelterDialogComponent {
  resourceForm = new FormGroup({
    // Name: Only allows letters, spaces, and a few special characters, min 3 & max 50 characters
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z\s\-,.]+$/), // Allows letters, spaces, hyphens, commas, and periods
    ]),

    capacity: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(1000),
      Validators.pattern(/^\d+$/),
    ]),
    availableBeds: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(500),
      Validators.pattern(/^\d+$/),
    ]),

    // Location: Must be at least 3 characters long, allowing letters, numbers, and some symbols
    location: new FormGroup({
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-Z0-9\s\-,.]+$/),
      ]),
      district: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-Z0-9\s\-,.]+$/),
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-Z0-9\s\-,.]+$/),
      ]),
      country: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(/^[a-zA-Z0-9\s\-,.]+$/),
      ]),
    }),
  });

  constructor(public dialogRef: MatDialogRef<AddShelterDialogComponent>) {}

  onSubmit() {
    if (this.resourceForm.valid) {
      this.dialogRef.close(this.resourceForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
