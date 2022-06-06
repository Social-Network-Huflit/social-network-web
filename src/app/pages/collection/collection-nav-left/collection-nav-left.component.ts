import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-collection-nav-left',
  templateUrl: './collection-nav-left.component.html',
  styleUrls: ['./collection-nav-left.component.scss']
})
export class CollectionNavLeftComponent implements OnInit {
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
