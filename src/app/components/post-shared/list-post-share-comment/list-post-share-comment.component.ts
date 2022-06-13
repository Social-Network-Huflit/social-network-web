import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import {
  CommentPostShareGQL,
  GetPostShareQuery,
  PostShare,
} from 'src/graphql/graphql';

@Component({
  selector: 'app-list-post-share-comment',
  templateUrl: './list-post-share-comment.component.html',
  styleUrls: ['./list-post-share-comment.component.scss'],
})
export class ListPostShareCommentComponent implements OnInit {
  @Input() getPostShareQueryRef: QueryRef<GetPostShareQuery, any>;
  @Input() postShare: PostShare;

  formGroup: FormGroup;

  constructor(private commentPostShareGQL: CommentPostShareGQL) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      content: new FormControl(''),
    });
  }

  onComment() {
    this.commentPostShareGQL
      .mutate({
        createCommentInput: {
          post_share_id: this.postShare.id,
          content: this.formGroup.value.content,
        },
      })
      .subscribe(() => {
        this.getPostShareQueryRef.refetch();
        this.formGroup.reset();
      });
  }
}
