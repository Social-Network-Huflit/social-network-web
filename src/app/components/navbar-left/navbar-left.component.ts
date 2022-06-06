import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from '../dialogs/change-password/change-password.component';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(ChangePasswordComponent, {
      width: '350px',
    });
  }
}
