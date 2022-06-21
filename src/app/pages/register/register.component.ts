import { RegisterGQL } from './../../../graphql/graphql';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private readonly notifier: NotifierService;

  formGroup: FormGroup;

  constructor(
    notifierService: NotifierService,
    private registerGQL: RegisterGQL
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  onRegister() {
    const { name, username, email, phoneNumber, password, confirmPassword } =
      this.formGroup.value;

    if (password !== confirmPassword) {
      return this.notifier.notify('error', 'Confirm password is not match');
    }

    this.registerGQL
      .mutate({
        registerInput: {
          name,
          username,
          email,
          phoneNumber,
          password,
        },
      })
      .subscribe(
        ({ errors, data }) => {
          if (errors) {
            errors.forEach((err) => this.notifier.notify('error', err.message));
            return;
          }

          const registerData = data?.register;

          if (registerData) {
            if (registerData.errors) {
              registerData.errors.forEach((err) =>
                this.notifier.notify('error', err.message)
              );
            } else if (registerData.code === 201) {
              this.formGroup.reset();
              return this.notifier.notify('success', registerData.message);
            }
          }
        },
        (err) => this.notifier.notify('error', err.message)
      );
  }
}
