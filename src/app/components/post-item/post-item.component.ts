import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QueryRef } from 'apollo-angular';
import {
  GetMyUserGQL,
  GetPostGQL,
  GetPostQuery,
  GetPostsDocument,
  GetPostsGQL,
  GetPostsQuery,
  GetPostsQueryVariables,
  LikePostGQL,
  Post,
  SharePostGQL,
  User,
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

  post?: Post;
  user?: User;
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
    private getPostsGQL: GetPostsGQL,
    private getMyUserGQL: GetMyUserGQL,
    private router: Router
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

    this.getMyUserGQL.watch().valueChanges.subscribe(({ data }) => {
      this.user = data.getMyUser as User;
    });

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

  onNavigateProfile() {
    console.log('haha');
    if (this.post?.owner.id === this.user?.id) {
      this.router.navigate(['/home/profile']);
    } else {
      this.router.navigate(['/home/profile', this.post?.owner.id]);
    }
  }
}
