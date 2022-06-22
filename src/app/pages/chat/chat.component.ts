import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { NewMessageDialogComponent } from 'src/app/components/dialogs/new-message-dialog/new-message-dialog.component';
import {
  InitRoomQuery
} from './../../../graphql/graphql';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  getRoomsQueryRef: QueryRef<InitRoomQuery, any>;
  rooms: Observable<InitRoomQuery['initRoom']>;

  constructor(private service: ChatService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.initRoom();

    this.rooms = this.service.rooms$;
  }

  openDialog(): void {
    this.dialog.open(NewMessageDialogComponent, {
      width: '350px',
    });
  }
}
