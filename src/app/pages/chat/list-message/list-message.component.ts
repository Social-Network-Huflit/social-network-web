import {
  GetMessageGQL,
  GetMessageQuery,
  ReceiveMessageDocument,
  ReceiveMessageSubscription,
  ReceiveMessageSubscriptionVariables,
  SendMessageGQL,
} from './../../../../graphql/graphql';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.scss'],
})
export class ListMessageComponent implements OnInit {
  messages: Observable<GetMessageQuery['getMessage']>;
  room: Observable<any>;
  private readonly notifier: NotifierService;

  room_id: string;

  formGroup: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ChatService,
    private sendMessageGQL: SendMessageGQL,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      content: new FormControl('', Validators.required),
    });

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.route.params.subscribe(
      (params: Params) => (this.room_id = params['room_id'])
    );

    this.room = this.service.getRoom(this.room_id);

    this.service.initMessage(this.room_id);

    this.messages = this.service.getMessages();
  }

  onSendMgs() {
    this.service.onSendMgs(
      {
        content: this.formGroup.value.content,
        room_id: this.room_id,
      },
      this.formGroup
    );
  }
}
