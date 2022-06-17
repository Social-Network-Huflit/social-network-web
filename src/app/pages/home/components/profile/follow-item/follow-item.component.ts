import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { FollowUserGQL, GetMyUserDocument, GetMyUserQuery, GetMyUserQueryVariables, GetUserByIdGQL, GetUserByIdQuery, User } from 'src/graphql/graphql';

@Component({
  selector: 'app-follow-item',
  templateUrl: './follow-item.component.html',
  styleUrls: ['./follow-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FollowItemComponent implements OnInit {
  @Input() user_id: string;

  user: User;
  myUser: User;
  getUserByIdQueryRef: QueryRef<GetUserByIdQuery, any>;
  loading= true;

  constructor(private apollo: Apollo, private getUserByIdGQL: GetUserByIdGQL, private followUserGQL: FollowUserGQL) {}

  ngOnInit(): void {
    this.getUserByIdQueryRef = this.getUserByIdGQL.watch({
      user_id: this.user_id,

    }, {
      notifyOnNetworkStatusChange: true
    })

    this.getUserByIdQueryRef.valueChanges.subscribe(({data, loading}) => {
      this.loading = loading;
      this.user = data.getUserById as User
    })

    const cache = this.apollo.client.readQuery<GetMyUserQuery, GetMyUserQueryVariables>({
      query: GetMyUserDocument
    });

    this.myUser = cache?.getMyUser as User
  }

  onFollow(){
    this.followUserGQL.mutate({
      user_id: this.user_id
    }).subscribe(() => {
      this.getUserByIdQueryRef.refetch();
    })
  }
}
