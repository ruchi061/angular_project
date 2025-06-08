import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-resource-shelter-edit-dialog',
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './resource-shelter-edit-dialog.component.html',
  styleUrl: './resource-shelter-edit-dialog.component.css',
})
export class ResourceShelterEditDialogComponent {
  editForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ResourceShelterEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      name: [data.name, Validators.required],
      quantity: [data.quantity],
      district: [data.location.district],
      street: [data.location.street],
      country: [data.location.country],
      state: [data.location.state],
      capacity: [data.capacity],
      availableBeds: [data.availableBeds],
    });
  }

  saveChanges() {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }
}
