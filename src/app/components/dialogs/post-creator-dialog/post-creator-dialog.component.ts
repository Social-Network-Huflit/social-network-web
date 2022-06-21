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
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post-creator-dialog',
  templateUrl: './post-creator-dialog.component.html',
  styleUrls: ['./post-creator-dialog.component.scss'],
})
export class PostCreatorDialogComponent implements OnInit {
  user?: User;
  formGroup: FormGroup;
  getPostsQueryRef: QueryRef<GetPostsQuery, any>;
  images: any[] = [];
  videos: any[] = [];
  files: {
    name: string;
    file: any;
  }[] = [];

  constructor(
    public dialogRef: MatDialogRef<PostCreatorDialogComponent>,
    private getMyUser: GetMyUserGQL,
    private createPostGQL: CreatePostGQL,
    private getPostsGQL: GetPostsGQL,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getMyUser
      .watch()
      .valueChanges.pipe(map((result) => result.data.getMyUser))
      .subscribe((user) => (this.user = user as User));

    this.formGroup = new FormGroup({
      caption: new FormControl('', Validators.required),
      files: new FormControl(''),
    });

    this.getPostsQueryRef = this.getPostsGQL.watch();
  }

  onCreatePost() {
    const files = this.files.map((item) => item.file);
    const variables = {
      createPostInput: {
        caption: this.formGroup.value['caption'],
        files,
      },
    };

    this.createPostGQL
      .mutate(variables, {
        context: {
          useMultipart: true,
        },
      })
      .subscribe(({ errors }) => {
        if (errors) {
          return;
        }

        this.getPostsQueryRef.refetch();
      });

    this.dialogRef.close();
  }

  onChangeImage(event: any) {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];

      if (file.type.includes('video')) {
        this.videos.push({
          name: file.name,
          video: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(event.target.files[i])
          ),
        });
      } else if (file.type.includes('image')) {
        this.images.push({
          name: file.name,
          image: this.sanitizer.bypassSecurityTrustUrl(
            window.URL.createObjectURL(event.target.files[i])
          ),
        });
      }

      this.files.push({
        name: file.name,
        file,
      });
    }
  }

  removeImage(file: any) {
    this.images = this.images.filter((item) => item.name !== file.name);
    this.videos = this.videos.filter((item) => item.name !== file.name);
    this.files = this.files.filter((item) => item.name !== file.name);
  }
}
