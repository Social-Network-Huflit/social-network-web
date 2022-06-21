import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/graphql/graphql';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss'],
})
export class PostBodyComponent implements OnInit {
  @Input()
  post: Post;

  cutContent: string = '';
  readMore: string = 'Xem thêm';
  indexImg: any = 0;
  iconAndLabel: {
    icon: string;
    label: string;
  };
  iconPath: string;

  constructor() {}

  ngOnInit(): void {
    if (this.post.caption) {
      if (this.post.caption.length >= 100) {
        this.cutContent = this.post.caption.slice(0, 100);
      }
    }
  }

  showFullContent() {
    this.cutContent = this.post.caption!;
    this.readMore = '';
  }
  nextImg() {
    if (this.indexImg < this.post.assets.length) {
      this.indexImg++;
    }
  }
  prevImg() {
    if (this.indexImg >= 1) {
      this.indexImg--;
    }
  }
}
