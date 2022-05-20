import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-item',
  templateUrl: './follow-item.component.html',
  styleUrls: ['./follow-item.component.scss'],
})
export class FollowItemComponent implements OnInit {
  @Input() followed: boolean;

  constructor() {}

  ngOnInit(): void {}
}
