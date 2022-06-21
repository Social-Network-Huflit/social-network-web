import {
  GetRoomsSubscription,
  GetRoomsSubscriptionVariables,
  InitRoomGQL,
  InitRoomQuery,
  GetRoomsDocument,
  GetMessageQuery,
  GetMessageGQL,
  ReceiveMessageSubscriptionVariables,
  ReceiveMessageSubscription,
  ReceiveMessageDocument,
  CreateMessageInput,
  SendMessageGQL,
} from './../../../graphql/graphql';
import { Injectable } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  getRoomsQueryRef: QueryRef<InitRoomQuery, any>;
  rooms$: Observable<InitRoomQuery['initRoom']>;
  private readonly notifier: NotifierService;

  getMessagesQueryRef: QueryRef<GetMessageQuery, any>;
  messages$: Observable<GetMessageQuery['getMessage']>;

  constructor(
    private initRoomGQL: InitRoomGQL,
    private getMsgGQL: GetMessageGQL,
    private sendMessageGQL: SendMessageGQL,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  initRoom() {
    this.getRoomsQueryRef = this.initRoomGQL.watch(undefined, {
      fetchPolicy: 'network-only',
    });

    this.rooms$ = this.getRoomsQueryRef.valueChanges.pipe(
      map((result) => result.data.initRoom)
    );

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
          initRoom: newRooms,
        };
      },
    });
  }

  initMessage(room_id: string) {
    this.getMessagesQueryRef = this.getMsgGQL.watch(
      {
        room_id,
      },
      {
        fetchPolicy: 'network-only',
      }
    );

    this.messages$ = this.getMessagesQueryRef.valueChanges.pipe(
      map((result) => result.data.getMessage)
    );

    this.getMessagesQueryRef.subscribeToMore<
      ReceiveMessageSubscription,
      ReceiveMessageSubscriptionVariables
    >({
      document: ReceiveMessageDocument,
      variables: {
        room_id,
      },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const newMessage = subscriptionData.data.receiveMessage;

        console.log(newMessage);

        return {
          getMessage: [...prev.getMessage, newMessage],
        };
      },
    });
  }

  getRoom(room_id: string) {
    return this.rooms$.pipe(
      map((result) => result.filter((item) => item.id === room_id)[0])
    );
  }

  getMessages() {
    return this.messages$;
  }

  onSendMgs(createMessageInput: CreateMessageInput, formGroup: FormGroup) {
    this.sendMessageGQL
      .mutate({
        createMessageInput,
      })
      .subscribe(({ data }) => {
        if (!data?.sendMessage.success) {
          this.notifier.notify('error', data?.sendMessage.message ?? '');
        } else {
          formGroup.reset();
        }
      });
  }
}
