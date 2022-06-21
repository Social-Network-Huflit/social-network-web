import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import {
  Collection,
  GetCollectionsGQL,
  GetCollectionsQuery,
} from 'src/graphql/graphql';
import { CollectionService } from './collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  showNavLeft: boolean;
  collections: Collection[];

  constructor(
    private service: CollectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.service.init();
    this.service.showNavLeft.subscribe((value) => {
      this.showNavLeft = value;
    });
    
    this.service.collections$.subscribe(item => this.collections = item as Collection[])
  }

  toggleNavLeft(value: boolean) {
    this.service.onToggleNavLeft(value);
  }
}
