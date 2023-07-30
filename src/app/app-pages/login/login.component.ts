import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // Add '!' to indicate it will be initialized later

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

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
