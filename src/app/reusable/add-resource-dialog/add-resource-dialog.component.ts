import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-add-resource-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-resource-dialog.component.html',
  styleUrl: './add-resource-dialog.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AddResourceDialogComponent {
  resourceForm = new FormGroup({
    // Name
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z\s\-,.]+$/),
    ]),

    // Quantity
    quantity: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(5000),
      Validators.pattern(/^\d+$/),
    ]),

    //Location
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

  constructor(public dialogRef: MatDialogRef<AddResourceDialogComponent>) {}

  onSubmit() {
    if (this.resourceForm.valid) {
      this.dialogRef.close(this.resourceForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
