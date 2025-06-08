import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  hide1 = signal(true);
  clickEvent1(event: MouseEvent) {
    this.hide1.set(!this.hide1());
    event.preventDefault()
    event.stopPropagation();
  }

  hide2 = signal(true);
  clickEvent2(event: MouseEvent) {
    this.hide2.set(!this.hide2());
    event.preventDefault()
    event.stopPropagation();
  }

  constructor(private router: Router) {
    // this.userForm.controls['userName'].disable();
  }

  errorMessage: string = '';

  onUserSave() {
    const formValue = this.userForm.value;

    if(formValue.password !== formValue.confirmPassword){
      this.errorMessage = "Passwords do not match!";
      return;
    }

    // this.authServ.getUsers().subscribe((users) => {
    //   const emailExists = users.find((user) => user.email === formValue.email);
    //   const userNameExists = users.find((user) => user.userName === formValue.userName);

    //   console.log(users);
    //   if (emailExists) {
    //     this.errorMessage = "Email already registered!";
    //     return;
    //   }

    //   if(userNameExists){
    //     this.errorMessage = "Username already exists..";
    //     return;
    //   }

    //   const userWithResults = {
    //     ...formValue,
    //     results: []
    //   };

    //   this.authServ.registerUser(userWithResults).subscribe(() => {
    //     alert('Registration successful!');
    //     this.userForm.reset();
    //     this.router.navigate(['/login']);
    //   });
    // });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToHome() {
    this.router.navigate(['/dashboard']);
  }
}
