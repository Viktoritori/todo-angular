import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: [null, Validators.required],
      role: [null, Validators.required],
    });
  }

  login() {
    console.log(this.form.getRawValue());
    this.authService.setUser(this.form.getRawValue());
  }
}
