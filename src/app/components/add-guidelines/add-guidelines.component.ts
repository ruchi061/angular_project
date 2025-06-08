import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-guidelines',
  imports: [CommonModule, ReactiveFormsModule, MatDivider, MatInputModule, MatCard, MatIcon, MatCardActions, MatCardSubtitle, MatCardContent, MatCardTitle, MatCardTitle, MatFormField, MatLabel,MatButtonModule],
  templateUrl: './add-guidelines.component.html',
  styleUrl: './add-guidelines.component.css',
})
export class AddGuidelinesComponent {

  guidelineForm = new FormGroup({
    category: new FormControl('', Validators.required),
    short_description: new FormControl('', Validators.required),
    effects: new FormControl('', Validators.required),
    guidelines: new FormGroup({
      do: new FormArray([new FormControl('', Validators.required)]),
      dont: new FormArray([new FormControl('', Validators.required)]),
    }),
    linkUrl: new FormControl('')
  });

  get doControls(): FormArray {
    return (this.guidelineForm.controls['guidelines'] as FormGroup).get('do') as FormArray;
  }

  get dontControls(): FormArray {
    return (this.guidelineForm.controls['guidelines'] as FormGroup).get('dont') as FormArray;
  }

  // doDontRequiredValidator(control: AbstractControl): ValidationErrors | null {
  //   const doArray = control.get('do') as FormArray;
  //   const dontArray = control.get('dont') as FormArray;

  //   if (!doArray || doArray.length < 1 || !dontArray || dontArray.length < 1) {
  //     return { doDontRequired: true };
  //   }
  //   return null;
  // }

  addDo() {
    this.doControls.push(new FormControl('', Validators.required));
  }


  removeDo(index: number) {
    if (this.doControls.length > 1) {
      this.doControls.removeAt(index);
    }
  }


  addDont() {
    this.dontControls.push(new FormControl('', Validators.required));
  }


  removeDont(index: number) {
    if (this.dontControls.length > 1) {
      this.dontControls.removeAt(index);
    }
  }


  onSubmit() {
    if (this.guidelineForm.valid) {
      console.log(this.guidelineForm.value);
    }
    else{
      this.guidelineForm.markAllAsTouched();
    }
  }
}
