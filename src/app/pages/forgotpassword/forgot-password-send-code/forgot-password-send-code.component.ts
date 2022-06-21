import { ForgotPasswordService } from './../forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { SendCodeGQL } from 'src/graphql/graphql';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-forgot-password-send-code',
  templateUrl: './forgot-password-send-code.component.html',
  styleUrls: ['./forgot-password-send-code.component.scss'],
})
export class ForgotPasswordSendCodeComponent implements OnInit {
  private readonly notifier: NotifierService;
  constructor(
    private service: ForgotPasswordService,
    private sendCodeGQL: SendCodeGQL,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {}

  onDoneSendCode(code: string) {
    this.sendCodeGQL
      .mutate({
        code,
      })
      .subscribe(({ data }) => {
        if (data?.sendCode) {
          console.log(data.sendCode)
          this.service.setUserId(data.sendCode)
          this.service.onChangePage();
        } else {
          this.notifier.notify("error", "Mã xác nhận không hợp lệ")
        }
      });
  }
}
