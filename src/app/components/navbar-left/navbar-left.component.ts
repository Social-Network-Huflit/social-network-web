import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from '../dialogs/change-password/change-password.component';
import { GetMyUserGQL, User } from 'src/graphql/graphql';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss'],
})
export class NavbarLeftComponent implements OnInit {
  user?: User | null | undefined;

  constructor(public dialog: MatDialog, private appService: AppService) {}

  ngOnInit(): void {
    this.appService.user$.subscribe((data) => (this.user = data as User));
  }

  openDialog(): void {
    this.dialog.open(ChangePasswordComponent, {
      width: '350px',
    });
  }
}
