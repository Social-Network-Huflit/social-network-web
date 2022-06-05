import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showNotification: boolean = false;
  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onToggleNotification() {
    this.showMenu = false;
    this.showNotification = !this.showNotification;
  }

  onToggleMenu() {
    this.showNotification = false;
    this.showMenu = !this.showMenu;
  }
}
