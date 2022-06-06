import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-body',
  templateUrl: './collection-body.component.html',
  styleUrls: ['./collection-body.component.scss'],
})
export class CollectionBodyComponent implements OnInit {
  showNavLeft: boolean;

  constructor(private service: CollectionService) {}

  ngOnInit(): void {
    this.service.showNavLeft.subscribe((value) => {
      this.showNavLeft = value;
    });
  }

  toggleNavLeft(value: boolean) {
    console.log("ahsdaifhasiu")
    this.service.onToggleNavLeft(value);
  }
}
