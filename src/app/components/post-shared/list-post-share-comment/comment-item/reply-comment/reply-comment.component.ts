import getEmotion from 'src/helpers/getEmotion';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { QueryRef } from 'apollo-angular';
import {
  GetPostShareQuery,
  PostShareReplyComment,
  LikeReplyCommentPostShareGQL,
} from 'src/graphql/graphql';

@Component({
  selector: 'app-reply-comment-post-share',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.scss'],
})
export class ReplyCommentPostShareComponent implements OnInit {
  @Input() reply_comment: PostShareReplyComment;
  @Input() getPostShareQueryRef: QueryRef<GetPostShareQuery, any>;
  @ViewChild('emotion') emotion: ElementRef;
  iconAndLabel: any;
  showInteract = false;

  constructor(
    private renderer: Renderer2,
    private likeCommentGQL: LikeReplyCommentPostShareGQL
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
    this.iconAndLabel = getEmotion(
      this.reply_comment.liked,
      this.reply_comment.like_type
    );
  }

  onShowInteract() {
    this.showInteract = true;
  }

  onLikeReplyComment(like_type: string) {
    this.likeCommentGQL
      .mutate({
        like_type,
        reply_comment_id: this.reply_comment.id,
      })
      .subscribe(({ errors }) => {
        if (errors) return;

        this.getPostShareQueryRef.refetch();
      });
  }
}
