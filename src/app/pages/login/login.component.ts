import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      usernameOrEmail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
