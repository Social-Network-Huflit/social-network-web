import { ForgotPasswordService } from './../forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ChangePasswordGQL } from 'src/graphql/graphql';

@Component({
  selector: 'app-forgot-password-change-password',
  templateUrl: './forgot-password-change-password.component.html',
  styleUrls: ['./forgot-password-change-password.component.scss'],
})
export class ForgotPasswordChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  user_id: string;
  private readonly notifier: NotifierService;

  constructor(
    private service: ForgotPasswordService,
    notifierService: NotifierService,
    private changePasswordGQL: ChangePasswordGQL
  ) {
    this.service.user_id$.subscribe((item) => (this.user_id = item));
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      new_password: new FormControl(''),
      confirm_password: new FormControl(''),
    });
  }

  onChangePassword() {
    const { new_password, confirm_password } = this.changePasswordForm.value;

    if (!this.changePasswordForm.valid) {
      return this.notifier.notify('error', 'Yêu cầu nhập mật khẩu');
    }

    if (new_password !== confirm_password) {
      return this.notifier.notify('error', 'Mật khẩu xác nhận không đúng');
    }

    console.log(this.user_id);

    this.changePasswordGQL
      .mutate({
        changePasswordInput: {
          newPassword: new_password,
          user_id: this.user_id,
        },
      })
      .subscribe(({ data }) => {
        if (data?.changePassword) {
          if (data.changePassword.success) {
            this.service.onChangePage();
          } else {
            return this.notifier.notify('error', data.changePassword.message);
          }
        }
      });
  }
}
