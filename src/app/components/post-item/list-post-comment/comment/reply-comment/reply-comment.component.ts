import getEmotion from 'src/helpers/getEmotion';
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { QueryRef } from 'apollo-angular';
import { PostReplyComment, LikeReplyCommentPostGQL } from 'src/graphql/graphql';

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.scss']
})
export class ReplyCommentComponent implements OnInit {
  @Input() reply_comment: PostReplyComment
  @Input() getPostQueryRef: QueryRef<any, any>;
  @ViewChild('emotion') emotion: ElementRef;

  showInteract: boolean = false;
  iconAndLabel: any;

  constructor(private renderer: Renderer2, private likeReplyCommentPostGQL: LikeReplyCommentPostGQL) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.emotion) {
        if (e.target !== this.emotion.nativeElement) {
          this.showInteract = false;
        }
      }
    });
  }

  ngOnInit(): void {
    this.iconAndLabel = getEmotion(this.reply_comment.liked, this.reply_comment.like_type)
  }

  onShowInteract(){
    this.showInteract = true;
  }

  onLikeReplyComment(like_type: string){
    this.likeReplyCommentPostGQL.mutate({
      like_type,
      reply_comment_id: this.reply_comment.id
    }).subscribe(({errors}) => {
      if (errors) return;

      this.getPostQueryRef.refetch();
    })
  }

}
