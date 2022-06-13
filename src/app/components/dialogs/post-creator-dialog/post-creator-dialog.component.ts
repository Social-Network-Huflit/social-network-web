import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import {
  CreatePostGQL,
  GetMyUserGQL,
  GetPostsGQL,
  GetPostsQuery,
  User,
} from 'src/graphql/graphql';
import { QueryRef } from 'apollo-angular';

@Component({
  selector: 'app-post-creator-dialog',
  templateUrl: './post-creator-dialog.component.html',
  styleUrls: ['./post-creator-dialog.component.scss'],
})
export class PostCreatorDialogComponent implements OnInit {
  user: User;
  formGroup: FormGroup;
  getPostsQueryRef: QueryRef<GetPostsQuery, any>;

  constructor(
    public dialogRef: MatDialogRef<PostCreatorDialogComponent>,
    private getMyUser: GetMyUserGQL,
    private createPostGQL: CreatePostGQL,
    private getPostsGQL: GetPostsGQL
  ) {}

  ngOnInit(): void {
    this.getMyUser
      .watch()
      .valueChanges.pipe(map((result) => result.data.getMyUser))
      .subscribe((user) => (this.user = user as User));

    this.formGroup = new FormGroup({
      caption: new FormControl('', Validators.required),
    });

    this.getPostsQueryRef = this.getPostsGQL.watch();
  }

  onCreatePost() {
    console.log(this.formGroup.value);

    this.createPostGQL
      .mutate({
        createPostInput: this.formGroup.value,
      })
      .subscribe(({ errors }) => {
        if (errors) {
          return;
        }

        this.getPostsQueryRef.refetch();
      });

    this.dialogRef.close();
  }
}
