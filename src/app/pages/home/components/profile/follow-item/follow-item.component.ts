import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GetMyUserDocument, GetMyUserQuery, GetMyUserQueryVariables, User } from 'src/graphql/graphql';

@Component({
  selector: 'app-follow-item',
  templateUrl: './follow-item.component.html',
  styleUrls: ['./follow-item.component.scss'],
})
export class FollowItemComponent implements OnInit {
  @Input() user: User;
  myUser: User;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    const cache = this.apollo.client.readQuery<GetMyUserQuery, GetMyUserQueryVariables>({
      query: GetMyUserDocument
    });

    this.myUser = cache?.getMyUser as User
  }
}
