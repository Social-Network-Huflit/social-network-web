import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-item',
  templateUrl: './friend-item.component.html',
  styleUrls: ['./friend-item.component.scss'],
})
export class FriendItemComponent implements OnInit {
  @Input() user: any;

  constructor() {}

  ngOnInit(): void {}
}
