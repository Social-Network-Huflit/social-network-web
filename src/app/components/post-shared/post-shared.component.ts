import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { QueryRef } from 'apollo-angular';
import { map } from 'rxjs';
import {
  CommentPostShareGQL,
  GetPostShareGQL,
  GetPostShareQuery,
  LikePostShareGQL,
  PostShare,
} from 'src/graphql/graphql';
import getEmotion from 'src/helpers/getEmotion';
import { ShareDialogComponent } from '../dialogs/share-dialog/share-dialog.component';
import { LikeType } from '../post-item/post-item.component';

@Component({
  selector: 'app-post-shared',
  templateUrl: './post-shared.component.html',
  styleUrls: ['./post-shared.component.scss'],
})
export class PostSharedComponent implements OnInit {
  @Input() post_share_id: string;
  @ViewChild('emotion') emotion: ElementRef;

  showInteract: boolean = false;
  showComment: boolean = false;
  showShare: boolean = false;
  showContextMenu: boolean = false;
  loading = true;

  getPostShareQueryRef: QueryRef<GetPostShareQuery, any>;
  postShare: PostShare;
  iconAndLabel: {
    icon: string;
    label: string;
  };

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    private likePostShareGQL: LikePostShareGQL,
    private getPostShareGQL: GetPostShareGQL,
    
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
    

    this.getPostShareQueryRef = this.getPostShareGQL.watch(
      {
        post_share_id: this.post_share_id,
      },
      {
        notifyOnNetworkStatusChange: true,
      }
    );

    this.getPostShareQueryRef.valueChanges.subscribe((result) => {
      if (this.loading) {
        this.loading = result.loading;
      }
      const data = result.data.getPostShare;
      this.postShare = data as PostShare;
      this.iconAndLabel = getEmotion(data!.liked, data!.like_type);
    });
  }

  onShowInteract() {
    this.showInteract = true;
  }

  toggleShowComment() {
    this.showComment = !this.showComment;
  }

  toggleShowShare() {
    this.showShare = !this.showShare;
  }

  toggleShowContextmenu() {
    this.showContextMenu = !this.showContextMenu;
  }

  openDialog(): void {
    this.dialog.open(ShareDialogComponent, {
      width: '700px',
      panelClass: 'dialog-container',
    });
  }

  onLikePost(like_type: LikeType) {
    this.likePostShareGQL
      .mutate({
        post_share_id: this.post_share_id,
        like_type,
      })
      .subscribe(({ errors, data }) => {
        if (errors) {
          return;
        }

        if (data) {
          this.getPostShareQueryRef.refetch();
        }
      });
  }

  
}
