import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { AppService } from 'src/app/app.service';
import { HomeService } from 'src/app/pages/home/home.service';
import {
  GetMyUserGQL,
  GetMyUserQuery,
  LogoutGQL,
  RemoveHistoryGQL,
  SearchGQL,
  User,
  WriteHistoryGQL,
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
  searchMode = false;
  isTyping = false;
  searchValue = '';
  user?: User;
  searchResult?: string[];
  userQueryRef: QueryRef<GetMyUserQuery, any>;

  @Input('classes') classes: string[] = [];
  @ViewChild('search') search: ElementRef;
  @ViewChild('notification') notification: ElementRef;
  @ViewChild('message') message: ElementRef;
  @ViewChild('menu') menu: ElementRef;

  constructor(
    private appService: AppService,
    private logoutGQL: LogoutGQL,
    private router: Router,
    private homeService: HomeService,
    private renderer: Renderer2,
    private getMyUserGQL: GetMyUserGQL,
    private searchGQL: SearchGQL,
    private writeHistoryGQL: WriteHistoryGQL,
    private removeHistoryGQL: RemoveHistoryGQL
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.search) {
        if (this.search.nativeElement !== e.target) {
          this.searchMode = false;
        }
      }
      if (this.notification) {
        if (this.notification.nativeElement !== e.target) {
          this.showNotification = false;
        }
      }
      if (this.message) {
        if (this.message.nativeElement !== e.target) {
          this.showChat = false;
        }
      }
      if (this.menu) {
        if (this.menu.nativeElement !== e.target) {
          this.showMenu = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.userQueryRef = this.getMyUserGQL.watch();

    this.userQueryRef.valueChanges.subscribe(
      ({ data }) => (this.user = data.getMyUser as User)
    );

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

  onSearchMode() {
    this.searchMode = true;
    console.log(this.searchMode);
  }

  onLogout() {
    this.logoutGQL.mutate().subscribe(({ data }) => {
      if (data?.logout) {
        this.homeService.getMyUser();
      }
    });
  }

  onChangeSearch(value: any) {
    setTimeout(() => {
      if (value.length > 0) {
        this.isTyping = true;

        this.searchGQL
          .watch({
            content: value,
          })
          .valueChanges.subscribe(({ data }) => {
            this.searchResult = data.searchUser?.map((item) => item.id);
          });
      } else {
        this.isTyping = false;
      }
    }, 500);
  }

  navigateProfile(user_id: string) {
    // this.router.onSameUrlNavigation = 'reload';
    this.writeHistoryGQL
      .mutate({
        user_id,
      })
      .subscribe(() => {
        this.userQueryRef.refetch();
        this.router.navigate(['/home/profile', user_id]);
        this.searchValue = '';
      });
  }

  removeHistory(history_id: string) {
    this.removeHistoryGQL
      .mutate({
        history_id,
      })
      .subscribe(({ data }) => {
        if (data?.removeHistory.code === 200) {
          this.userQueryRef.refetch();
        }
      });
  }
}
