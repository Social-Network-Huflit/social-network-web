import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/graphql/graphql';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {
  @Input() room: Pick<Room, "__typename" | "id" | "name" | "avatar" | "last_message" | "timestamp">

  constructor() { }

  ngOnInit(): void {
  }

}
