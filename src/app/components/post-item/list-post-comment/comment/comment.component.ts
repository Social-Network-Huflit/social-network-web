import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import {
  LikeCommentPostGQL,
  PostComment,
  ReplyCommentPostGQL
} from 'src/graphql/graphql';
import getEmotion from 'src/helpers/getEmotion';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @ViewChild('emotion') emotion: ElementRef;
  @Input() comment: PostComment;
  @Input() getPostQueryRef: QueryRef<any, any>;

  formGroup: FormGroup;
  iconAndLabel: any;
  showInteract: boolean = false;
  showReplyComment = false;

  constructor(
    private renderer: Renderer2,
    private likeCommentPostGQL: LikeCommentPostGQL,
    private replyCommentGQL: ReplyCommentPostGQL
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.emotion) {
        if (e.target !== this.emotion.nativeElement) {
          this.showInteract = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      content: new FormControl(''),
    });

    this.iconAndLabel = getEmotion(this.comment.liked, this.comment.like_type);
  }

  onShowInteract() {
    this.showInteract = true;
  }

  onToggleShowReplyComment() {
    this.showReplyComment = !this.showReplyComment;
  }

  onLikeComment(like_type: string) {
    this.likeCommentPostGQL
      .mutate({
        comment_id: this.comment.id,
        like_type,
      })
      .subscribe(({ errors }) => {
        if (errors) {
          return;
        }

        this.getPostQueryRef.refetch();
      });
  }

  onReplyComment() {
    this.replyCommentGQL.mutate({
      replyCommentInput: {
        comment_id: this.comment.id,
        content: this.formGroup.value["content"]
      }
    }).subscribe(({errors}) => {
      if (errors){
        return
      }

      this.getPostQueryRef.refetch();
    })
  }
}
