import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { ChangePasswordComponent } from '../dialogs/change-password/change-password.component';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor(public dialog: MatDialog, private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ChangePasswordComponent, {
      width: '350px',
    });
    this.onHideDrawer();
  }

  onHideDrawer(){
    this.appService.toggleDrawer(false);
  }

  navigate(path: string){
    this.router.navigate([path]);
    this.onHideDrawer();
  }
}
