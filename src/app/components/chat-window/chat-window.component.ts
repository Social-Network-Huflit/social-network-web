import { map, Observable } from 'rxjs';
import {
  GetRoomsDocument,
  GetRoomsSubscriptionVariables,
  InitRoomQuery,
  InitRoomQueryVariables,
} from './../../../graphql/graphql';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import {
  GetRoomsGQL,
  GetRoomsSubscription,
  InitRoomGQL,
  Room,
} from 'src/graphql/graphql';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {
  getRoomsQueryRef: QueryRef<InitRoomQuery, any>;
  rooms: Observable<InitRoomQuery["initRoom"]>;

  constructor(
    private initRoomGQL: InitRoomGQL,
  ) {
    this.getRoomsQueryRef = this.initRoomGQL.watch(undefined, {
      fetchPolicy: 'network-only',
    });

    this.rooms = this.getRoomsQueryRef.valueChanges.pipe(
      map(result => result.data.initRoom)
    );
  }

  ngOnInit(): void {
    this.subscription();
  }

  subscription() {
    this.getRoomsQueryRef.subscribeToMore<
      GetRoomsSubscription,
      GetRoomsSubscriptionVariables
    >({
      document: GetRoomsDocument,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newRooms = subscriptionData.data.getRooms;

        return {
          initRoom: newRooms
        };
      }
      
    });
  }
}
