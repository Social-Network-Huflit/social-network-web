import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { HomeService } from 'src/app/pages/home/home.service';
import {
  LogoutGQL,
  GetMyUserQuery,
  Exact,
  GetMyUserGQL,
} from 'src/graphql/graphql';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showNotification: boolean = false;
  showChat: boolean = false;
  showMenu: boolean = false;

  @Input('classes') classes: string[] = [];

  constructor(
    private appService: AppService,
    private logoutGQL: LogoutGQL,
    private router: Router,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.homeService.onInit(this.router);
  }

  ngOnDestroy(): void {
    this.homeService.onDestroy();
  }

  onToggleNotification() {
    this.showMenu = false;
    this.showChat = false;

    this.showNotification = !this.showNotification;
  }

  onToggleMenu() {
    this.showChat = false;
    this.showNotification = false;
    this.showMenu = !this.showMenu;
  }
  onToggleChat() {
    this.showMenu = false;
    this.showNotification = false;
    this.showChat = !this.showChat;
  }

  onToggleDrawer(value: boolean) {
    this.appService.toggleDrawer(value);
  }

  onLogout() {
    this.logoutGQL.mutate().subscribe(({ data }) => {
      if (data?.logout) {
        this.homeService.getMyUser();
      }
    });
  }
}
