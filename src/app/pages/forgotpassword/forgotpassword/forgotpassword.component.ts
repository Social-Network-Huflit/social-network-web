import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  currentPage: 'send-email' | 'send-code' | 'change-password' | 'success' =
    'send-email';

  constructor() {}

  ngOnInit(): void {}

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

  onSendMail(){
    console.log("send mail")
    this.onChangePage();
  }

  onDoneSendCode(code: string){
    this.onChangePage()
  }

  onChangePassword(){
    this.onChangePage();
  }
}
