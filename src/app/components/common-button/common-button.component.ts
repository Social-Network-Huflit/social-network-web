import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  loading?: boolean;

  @Input()
  onClick: Function;

  constructor() { }

  ngOnInit(): void {
  }

}
