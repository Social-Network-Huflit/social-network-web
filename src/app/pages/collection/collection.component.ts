import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  showNavLeft: boolean;

  constructor(private service: CollectionService) { }

  ngOnInit(): void {
    this.service.showNavLeft.subscribe(value => {
      this.showNavLeft = value;
    })
  }

  toggleNavLeft(value: boolean){
    this.service.onToggleNavLeft(value);
  }
}
