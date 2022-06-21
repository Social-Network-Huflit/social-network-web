import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetSuggestionUserGQL } from 'src/graphql/graphql';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.scss'],
})
export class SuggestionListComponent implements OnInit {
  users?: string[];

  constructor(private getSuggestionGQL: GetSuggestionUserGQL, private router: Router) {}

  ngOnInit(): void {
    this.getSuggestionGQL
      .watch()
      .valueChanges.subscribe(
        ({ data }) =>
          (this.users = data.getSuggestionUser.map((item) => item.id))
      );
  }
}
