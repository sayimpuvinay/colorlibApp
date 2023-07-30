import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      // Check if email and password match the desired values
      if (email === 'vinaysayimpu@gmail.com' && password === 'Vinay@123') {
        // Authentication successful, navigate to the home component
        this.router.navigate(['/home']);
      } else {
        // Authentication failed, you can handle the error here
        // For example, you can display an error message to the user
        console.log('Authentication failed. Invalid email or password.');
      }
    }
  }
}
