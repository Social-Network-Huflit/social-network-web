import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Exact, GetMyUserGQL, GetMyUserQuery } from 'src/graphql/graphql';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.onInit(this.router);
  }

  ngOnDestroy(): void {
    this.homeService.onDestroy();
  }
}
