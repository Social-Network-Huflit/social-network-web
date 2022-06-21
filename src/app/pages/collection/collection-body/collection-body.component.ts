import {
  Collection,
  GetCollectionGQL,
  GetCollectionQuery,
  GetCollectionsGQL,
  Maybe,
  Post,
  RemoveFromCollectionGQL,
} from './../../../../graphql/graphql';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CollectionService } from '../collection.service';
import { QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-collection-body',
  templateUrl: './collection-body.component.html',
  styleUrls: ['./collection-body.component.scss'],
})
export class CollectionBodyComponent implements OnInit {
  showNavLeft: boolean;
  collection_id: string;
  posts: Post[] = [];
  collection: Collection;
  getCollectionQueryRef: QueryRef<GetCollectionQuery, any>;

  constructor(
    private service: CollectionService,
    private route: ActivatedRoute,
    private removeFromCollectionGQL: RemoveFromCollectionGQL,
    private getCollection: GetCollectionGQL
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (item: Params) => (this.collection_id = item['collection_id'])
    );

    this.service.showNavLeft.subscribe((value) => {
      this.showNavLeft = value;
    });

    if (!this.collection_id) {
      this.service.collections$.subscribe((item) => {
        const details = item.map((collection) => collection.details);
        details.forEach((detail) =>
          detail.forEach((d) => {
            if (d.post) {
              this.posts.push(d.post as Post);
            }
          })
        );
      });
    } else {
      this.getCollectionQueryRef = this.getCollection.watch({
        collection_id: this.collection_id,
      });

      this.getCollectionQueryRef.valueChanges.subscribe((item) => {
        this.posts = item.data.getCollection!.details.map(
          (detail) => detail.post as Post
        );
      });
    }
  }

  toggleNavLeft(value: boolean) {
    this.service.onToggleNavLeft(value);
  }

  remove(post_id: string) {
    this.removeFromCollectionGQL
      .mutate({
        collection_id: this.collection_id,
        post_id,
      })
      .subscribe(() => this.getCollectionQueryRef.refetch());
  }
}
