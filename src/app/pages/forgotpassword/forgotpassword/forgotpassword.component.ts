import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  currentPage: 'send-email' | 'send-code' | 'change-password' | 'success' =
    'send-email';
  sendEmailForm: FormGroup;
  changePasswordForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.sendEmailForm = new FormGroup({
      email: new FormControl('')
    })
    this.changePasswordForm = new FormGroup({
      new_password: new FormControl(''),
      confirm_password: new FormControl(''),
    })
  }

  onChangePage() {
    switch (this.currentPage) {
      case 'send-email':
        this.currentPage = 'send-code';
        break;
      case 'send-code':
        this.currentPage = 'change-password';
        break;
      case 'change-password':
        this.currentPage = 'success';
        break;
      default:
        this.currentPage = 'send-code';
        break;
    }
  }

  onSendMail() {
    console.log('send mail');
    this.onChangePage();
  }

  onDoneSendCode(code: string) {
    this.onChangePage();
  }

  onChangePassword() {
    this.onChangePage();
  }
}
