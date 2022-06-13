import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QueryRef } from 'apollo-angular';
import {
  GetPostShareQuery,
  PostShareComment,
  LikeCommentPostShareGQL,
  ReplyCommentPostShareGQL
} from 'src/graphql/graphql';
import getEmotion from 'src/helpers/getEmotion';

@Component({
  selector: 'app-comment-item-share',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment: PostShareComment;
  @Input() getPostShareQueryRef: QueryRef<GetPostShareQuery, any>;

  @ViewChild('emotion') emotion: ElementRef;

  iconAndLabel: any;
  showInteract = false;
  showReplyComment = false;
  formGroup: FormGroup;

  constructor(
    private renderer: Renderer2,
    private likeCommentGQL: LikeCommentPostShareGQL,
    private replyCommentGQL: ReplyCommentPostShareGQL
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

  onToggleShowReplyComment() {
    this.showReplyComment = !this.showReplyComment;
  }

  onShowInteract() {
    this.showInteract = true;
  }

  onLikeComment(like_type: string) {
    this.likeCommentGQL.mutate({
      comment_id: this.comment.id,
       like_type
    }).subscribe(({errors}) => {
      if (errors) return

      this.getPostShareQueryRef.refetch();
    })
  }

  onReplyComment() {
    this.replyCommentGQL.mutate({
      replyCommentPostInput: {
        comment_id: this.comment.id,
        content: this.formGroup.value["content"]
      }
    }).subscribe(({errors}) => {
      if (errors) return;

      this.getPostShareQueryRef.refetch();
    })
  }
}
