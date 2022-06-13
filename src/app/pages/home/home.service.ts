import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Exact, GetMyUserGQL, GetMyUserQuery } from 'src/graphql/graphql';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private getMyUserQueryRef: QueryRef<
    GetMyUserQuery,
    Exact<{ [key: string]: never }>
  >;
  private getMyUserScription: Subscription;

  constructor(private getMyUserGQL: GetMyUserGQL) {}

  onInit(router: Router) {
    this.getMyUserQueryRef = this.getMyUserGQL.watch(undefined, {
      fetchPolicy: 'network-only',
    });
    this.getMyUserScription = this.getMyUserQueryRef.valueChanges.subscribe(
      ({ data, errors }) => {
        if (errors) {
          router.navigate(['/login']);
        }
      }
    );
  }

  onDestroy() {
    this.getMyUserScription.unsubscribe();
  }

  getMyUser() {
    this.getMyUserQueryRef.refetch();
  }
}
