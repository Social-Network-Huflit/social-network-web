import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AppService } from 'src/app/app.service';
import {
  GetMyUserQuery,
  User,
  GetMyUserQueryVariables,
  GetMyUserDocument,
} from 'src/graphql/graphql';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
  myUser?: User;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.user$.subscribe((data) => (this.myUser = data as User));
  }
}
