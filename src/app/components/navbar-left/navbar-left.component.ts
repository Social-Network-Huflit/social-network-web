import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from '../dialogs/change-password/change-password.component';
import { GetMyUserGQL, User } from 'src/graphql/graphql';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent implements OnInit {
  user?: User | null | undefined;

  constructor(public dialog: MatDialog, private getMyUserGQL: GetMyUserGQL) {}

  ngOnInit(): void {
    this.getMyUserGQL
      .watch()
      .valueChanges.pipe(
        map((result) => result.data.getMyUser as User | null | undefined)
      )
      .subscribe((data) => (this.user = data));
  }

  openDialog(): void {
    this.dialog.open(ChangePasswordComponent, {
      width: '350px',
    });
  }
}
