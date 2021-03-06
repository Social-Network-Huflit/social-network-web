import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Apollo, QueryRef } from 'apollo-angular';
import {
  GetMyUserDocument,
  GetMyUserGQL,
  GetMyUserQuery,
  GetMyUserQueryVariables,
  GetPostByUserIdGQL,
  GetUserByIdGQL,
  GetUserByIdQuery,
  Post,
  PostShare,
  User,
} from 'src/graphql/graphql';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  posts: (
    | {
        __typename?: 'Post' | undefined;
        id: string;
      }
    | {
        __typename?: 'PostShare' | undefined;
        id: string;
      }
  )[];
  user?: User;
  user_id?: string;

  getMyUserQueryRef: QueryRef<GetMyUserQuery, any>;
  getUserByIdQueryRef: QueryRef<GetUserByIdQuery, any>;

  constructor(
    private getMyUserGQL: GetMyUserGQL,
    private route: ActivatedRoute,
    private getUserByIdGQL: GetUserByIdGQL,
    private getPostsByUserGQL: GetPostByUserIdGQL,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.params.subscribe(
      (params: Params) => (this.user_id = params['user_id'])
    );

    if (!this.user_id) {
      this.getMyUserQueryRef = this.getMyUserGQL.watch();

      this.getMyUserQueryRef.valueChanges.subscribe(({ data }) => {
        this.user = data.getMyUser as User;

        this.getPostsByUserGQL
          .watch({
            user_id: this.user.id,
          })
          .valueChanges.subscribe(
            ({ data }) => (this.posts = data.getPostByUser)
          );
      });
    } else {
      this.getUserByIdQueryRef = this.getUserByIdGQL.watch({
        user_id: this.user_id,
      });
      this.getUserByIdQueryRef.valueChanges.subscribe(({ data }) => {
        this.user = data.getUserById as User;

        this.getPostsByUserGQL
          .watch({
            user_id: this.user.id,
          })
          .valueChanges.subscribe(
            ({ data }) =>
              (this.posts = data.getPostByUser)
          );
      });
    }
  }

  
}
