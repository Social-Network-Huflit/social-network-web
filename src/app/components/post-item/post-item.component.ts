import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QueryRef } from 'apollo-angular';
import {
  GetPostGQL,
  GetPostQuery,
  GetPostsDocument,
  GetPostsGQL,
  GetPostsQuery,
  GetPostsQueryVariables,
  LikePostGQL,
  Post,
  SharePostGQL,
} from 'src/graphql/graphql';
import getEmotion from 'src/helpers/getEmotion';
import { ShareDialogComponent } from '../dialogs/share-dialog/share-dialog.component';

export type LikeType = 'like' | 'haha' | 'wow' | 'sad' | 'angry';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @ViewChild('emotion') emotion: ElementRef;
  @Input() post_id: string;

  post: Post;
  getPostQueryRef: QueryRef<GetPostQuery, any>;
  getPostsQueryRef: QueryRef<GetPostsQuery, any>;

  showInteract: boolean = false;
  showComment: boolean = false;
  showShare: boolean = false;
  showContextMenu: boolean = false;
  loading: boolean;
  iconAndLabel: {
    icon: string;
    label: string;
  };

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    private getPostGQL: GetPostGQL,
    private likePostGQL: LikePostGQL,
    private sharePostGQL: SharePostGQL,
    private getPostsGQL: GetPostsGQL
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
    if (this.loading === undefined) {
      this.loading = true;
    }
    this.getPostQueryRef = this.getPostGQL.watch(
      {
        post_id: this.post_id,
      },
      {
        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
      }
    );

    this.getPostQueryRef.valueChanges.subscribe(({ data, loading }) => {
      if (loading === false) {
        this.loading = loading;
      }
      const post = data.getPost;
      this.post = post as Post;
      this.iconAndLabel = getEmotion(this.post.liked, this.post.like_type);
    });

    this.getPostsQueryRef = this.getPostsGQL.watch();
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
      data: this.post,
    });
  }

  onLikePost(like_type: LikeType) {
    this.likePostGQL
      .mutate({
        post_id: this.post_id,
        like_type,
      })
      .subscribe(({ errors, data }) => {
        if (errors) {
          return;
        }

        if (data) {
          this.getPostQueryRef.refetch();
        }
      });
  }

  onSharePost(caption: string) {
    this.sharePostGQL
      .mutate(
        {
          createPostInput: {
            post_id: this.post_id,
            caption,
          },
        },
        {
          update: (store, { data, errors }) => {
            if (errors) return;

            const postShare = data!.createPostShare.post;

            const cache = store.readQuery<
              GetPostsQuery,
              GetPostsQueryVariables
            >({
              query: GetPostsDocument,
            });

            store.writeQuery({
              query: GetPostsDocument,
              data: {
                getPosts: [postShare, ...cache!.getPosts],
              },
            });

            window.scroll({
              top: 0,
              left: 0,
              behavior: 'smooth',
            });

            this.showShare = false;
          },
        }
      )
      .subscribe();
  }
}
