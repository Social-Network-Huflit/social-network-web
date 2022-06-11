import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import { map } from 'rxjs';
import {
  Post,
} from 'src/graphql/graphql';
import {
  CommentPostGQL,
  Exact,
  PostComment,
} from './../../../../graphql/graphql';

@Component({
  selector: 'app-list-post-comment',
  templateUrl: './list-post-comment.component.html',
  styleUrls: ['./list-post-comment.component.scss'],
})
export class ListPostCommentComponent implements OnInit {
  @Input() post: Post;
  @Input() getPostQueryRef: QueryRef<any, any>;
  commentFormGroup: FormGroup;
  loading: boolean = false;

  constructor(
    private commentPostGQL: CommentPostGQL
  ) {}

  ngOnInit(): void {
    this.commentFormGroup = new FormGroup({
      content: new FormControl('', Validators.required),
    });

  }

  onComment() {
    this.commentPostGQL
      .mutate({
        createCommentInput: {
          post_id: this.post!.id,
          content: this.commentFormGroup.value.content,
        },
      })
      .subscribe(({ loading }) => {
        if (loading) {
          this.loading = true;
        } else {
          this.getPostQueryRef.refetch();
          this.commentFormGroup.reset();
        }
      });
  }
}
