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
      email: ['vinaysayimpu@gmail.com', [Validators.required, Validators.email]],
      password: ['123456789', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      // Perform authentication logic here using 'this.loginForm.value.email' and 'this.loginForm.value.password'
      // For example, you can use a service to authenticate the user
      // and then navigate to the home component upon successful authentication.

      // For now, let's just navigate to the home component directly without any authentication logic.
      this.router.navigate(['/home']);
    }
  }
}
