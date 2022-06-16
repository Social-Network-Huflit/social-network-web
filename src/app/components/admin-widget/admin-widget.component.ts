import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-widget',
  templateUrl: './admin-widget.component.html',
  styleUrls: ['./admin-widget.component.scss'],
})
export class AdminWidgetComponent implements OnInit {
  @Input() titleWidget: string = '';
  @Input() number: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
