import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {

  userForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required,]),
    password: new FormControl("", [Validators.required])
  })
  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
    event.preventDefault();
  }

  constructor(private router: Router) {
  }

  errorMessage: string = '';

  onUserSave() {
    // const isValid = this.userForm.valid;
    const formValue = this.userForm.value;

    // this.authServ.getUsers().subscribe((users) => {
    //   const user = users.find((user) => user.email === formValue.email);

    //   if (user) {
    //     if (user.password === formValue.password) {
    //       sessionStorage.setItem("email",user.email);
    //       this.errorMessage = '';
    //       this.userForm.reset();
    //       alert('Welcome to QuizMaster!');
    //       window.location.href = '/category';
    //     }
    //     else {
    //       this.errorMessage = 'Incorrect password. Please try again.';
    //     }
    //   }
    //   else {
    //     this.errorMessage = 'User not found. Please register first.';
    //   }

    // });

  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome() {
    this.router.navigate(['/category']);
  }
}
