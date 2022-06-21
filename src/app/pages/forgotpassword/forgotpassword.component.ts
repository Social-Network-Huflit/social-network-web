import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  currentPage: 'send-email' | 'send-code' | 'change-password' | 'success';

  constructor(private service: ForgotPasswordService) {}

  ngOnInit(): void {
    this.service.currentPage$.subscribe(item => this.currentPage = item)
  }

  onChangePage() {
    this.service.onChangePage();
  }
}
