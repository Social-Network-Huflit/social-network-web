import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ChangeOldPasswordGQL } from 'src/graphql/graphql';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  formGroup: FormGroup;
  private readonly notifier: NotifierService;

  constructor(
    private changePassword: ChangeOldPasswordGQL,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      old_password: new FormControl('', Validators.required),
      new_password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
    });
  }

  submit() {
    const { old_password, new_password, confirm_password } =
      this.formGroup.value;

    if (new_password !== confirm_password) {
      return this.notifier.notify('error', 'Mật khẩu xác nhận không đúng');
    }

    this.changePassword
      .mutate({
        newPassword: new_password,
        oldPassword: old_password,
      })
      .subscribe(({ data }) => {
        if (data?.changeOldPassword.success) {
          this.notifier.notify('success', 'Đổi mật khẩu thành công');
          this.formGroup.reset();
        } else {
          this.notifier.notify('error', 'Mật khẩu cũ không đúng');
        }
      });
  }
}
