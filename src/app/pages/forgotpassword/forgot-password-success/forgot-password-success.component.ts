import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from '../forgot-password.service';

@Component({
  selector: 'app-forgot-password-success',
  templateUrl: './forgot-password-success.component.html',
  styleUrls: ['./forgot-password-success.component.scss'],
})
export class ForgotPasswordSuccessComponent implements OnInit {
  constructor(private service: ForgotPasswordService, private router: Router) {}

  ngOnInit(): void {}

  back() {
    this.router.navigate(['/login']).then(() => this.service.onChangePage());
  }
}
