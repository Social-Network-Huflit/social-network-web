import { GetMyUserGQL, GetMyUserQuery, User } from 'src/graphql/graphql';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QueryRef } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  user$: Observable<GetMyUserQuery['getMyUser']>;
  userQueryRef: QueryRef<GetMyUserQuery, any>;

  showDrawer = new EventEmitter<boolean>();

  toggleDrawer(value: boolean) {
    this.showDrawer.emit(value);
  }

  constructor(private getMyUserGQL: GetMyUserGQL) {}

  init() {
    this.userQueryRef = this.getMyUserGQL.watch();

    this.user$ = this.userQueryRef.valueChanges.pipe(
      map((result) => result.data.getMyUser)
    );
  }
}
