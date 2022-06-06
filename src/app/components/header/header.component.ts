import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showNotification: boolean = false;
  showMenu: boolean = false;

  @Input('classes') classes: string[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  onToggleNotification() {
    this.showMenu = false;
    this.showNotification = !this.showNotification;
  }

  onToggleMenu() {
    this.showNotification = false;
    this.showMenu = !this.showMenu;
  }

  onToggleDrawer(value: boolean){
    this.appService.toggleDrawer(value);
  }
}
