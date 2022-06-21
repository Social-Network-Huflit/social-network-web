import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { SendMailGQL } from 'src/graphql/graphql';
import { ForgotPasswordService } from '../forgot-password.service';

@Component({
  selector: 'app-forgot-password-send-email',
  templateUrl: './forgot-password-send-email.component.html',
  styleUrls: ['./forgot-password-send-email.component.scss'],
})
export class ForgotPasswordSendEmailComponent implements OnInit {
  sendEmailForm: FormGroup;
  loading = false;
  private readonly notifier: NotifierService;

  constructor(
    private service: ForgotPasswordService,
    private sendEmailGQL: SendMailGQL,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.sendEmailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSendMail() {
    if (!this.sendEmailForm.valid) {
      return this.notifier.notify('error', 'Email không hợp lệ');
    }

    this.sendEmailGQL
      .mutate(
        {
          email: this.sendEmailForm.value.email,
        },
        {
          useMutationLoading: true,
        }
      )
      .subscribe(({ data, loading }) => {
        this.loading = loading;

        if (data?.sendEmail) {
          if (!data.sendEmail.success) {
            return this.notifier.notify('error', data.sendEmail.message);
          } else {
            this.service.onChangePage();
          }
        }
      });
  }
}
