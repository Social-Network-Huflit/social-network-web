import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import {
  Exact,
  GetMyUserGQL,
  GetMyUserQuery,
  LoginGQL,
} from 'src/graphql/graphql';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  getMyUserQueryRef: QueryRef<GetMyUserQuery, Exact<{ [key: string]: never }>>;
  getMyUserSubscription: Subscription;
  formGroup: FormGroup;

  constructor(
    private loginGQL: LoginGQL,
    private getMyUserGQL: GetMyUserGQL,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      usernameOrEmail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.getMyUserQueryRef = this.getMyUserGQL.watch();
    this.getMyUserSubscription = this.getMyUserQueryRef.valueChanges.subscribe(
      ({ data }) => {
        if (data.getMyUser) {
          this.router.navigate(['']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.getMyUserSubscription.unsubscribe();
  }

  onLogin() {
    this.loginGQL
      .mutate({
        loginInput: this.formGroup.value,
      })
      .subscribe(({ errors, data }) => {
        if (errors) {
          //Show message
          return;
        }

        if (data) {
          if (data.login.code !== 200) {
            return;
          }

          this.formGroup.controls['usernameOrEmail'].reset();
          this.formGroup.controls['password'].reset();
          this.getMyUserQueryRef.refetch();
        }
      });
  }
}
