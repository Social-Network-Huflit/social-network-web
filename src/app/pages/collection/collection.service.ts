import { EventEmitter, Injectable } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import {
  Collection,
  GetCollectionsGQL,
  GetCollectionsQuery,
} from 'src/graphql/graphql';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  getCollectionQueryRef: QueryRef<GetCollectionsQuery, any>;
  collections$: Observable<GetCollectionsQuery['getMyCollection']>;

  public showNavLeft = new EventEmitter<boolean>();

  constructor(private getCollectionsGQL: GetCollectionsGQL) {}

  onToggleNavLeft(value: boolean) {
    this.showNavLeft.emit(value);
  }

  init() {
    this.getCollectionQueryRef = this.getCollectionsGQL.watch();

    this.collections$ = this.getCollectionQueryRef.valueChanges.pipe(
      map((result) => result.data.getMyCollection)
    );
  }
}
