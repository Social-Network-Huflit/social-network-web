import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'social-network-web';
  showDrawer: boolean;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.init();
    this.service.showDrawer.subscribe((value) => (this.showDrawer = value));
  }

  toggleDrawer(value: boolean) {
    this.service.toggleDrawer(value);
  }
}
