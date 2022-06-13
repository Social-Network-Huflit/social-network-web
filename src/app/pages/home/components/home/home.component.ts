import { Component, OnInit } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { map } from 'rxjs';
import {
  GetPostsGQL,
  GetPostsQuery,
  Post,
  PostShare,
} from 'src/graphql/graphql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeFragmentComponent implements OnInit {
  listPost: {
    __typename?: "Post" | "PostShare" | undefined;
    id: string
  }[];

  constructor(private getPostGQL: GetPostsGQL) {}

  ngOnInit(): void {
    this.getPostGQL
      .watch(undefined, {
        fetchPolicy: 'cache-and-network',
      })
      .valueChanges.pipe(
        map((result) =>
          (result.data.getPosts)
        )
      )
      .subscribe((data) => (this.listPost = data));
  }
}
