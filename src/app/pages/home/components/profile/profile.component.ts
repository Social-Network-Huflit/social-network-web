import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GetMyUserDocument, GetMyUserGQL, GetMyUserQuery, GetMyUserQueryVariables, GetUserByIdGQL, User,  } from 'src/graphql/graphql';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user?: User
  user_id?: string;

  constructor(private getMyUserGQL: GetMyUserGQL, private route: ActivatedRoute, private getUserByIdGQL: GetUserByIdGQL) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.user_id = params["user_id"]);

    if (!this.user_id){
      this.getMyUserGQL.watch().valueChanges.subscribe(({data}) => {
        this.user = data.getMyUser as User
      })
    }else{
      this.getUserByIdGQL.watch({
        user_id: this.user_id
      }).valueChanges.subscribe(({data}) => {
        this.user = data.getUserById as User;
      })
    }
  }

}
