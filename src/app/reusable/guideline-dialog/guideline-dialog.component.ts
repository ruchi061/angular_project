import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-guideline-dialog',
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatLabel, MatButtonModule, ReactiveFormsModule,MatInputModule,MatCardModule ],
  templateUrl: './guideline-dialog.component.html',
  styleUrl: './guideline-dialog.component.css'
})
export class GuidelineDialogComponent {

  suggestionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<GuidelineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.suggestionForm = this.fb.group({
      suggestion: [data.suggestions || '', Validators.required]
    });
  }

  submit() {
    if (this.suggestionForm.valid) {
      this.dialogRef.close(this.suggestionForm.value.suggestion);
    }
  }

}
