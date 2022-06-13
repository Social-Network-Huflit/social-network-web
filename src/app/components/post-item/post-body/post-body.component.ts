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
  listImg: string[] = [
    'https://maserati.scene7.com/is/image/maserati/maserati/regional/us/hero-website-new-upload/221340M_1920x1080.jpg?$1920x2000$&fit=constrain',
    'https://autopro8.mediacdn.vn/2021/11/11/2022-ferrari-br20-1-16366321688531761127338.jpg',
    'https://cafefcdn.com/thumb_w/650/203337114487263232/2022/3/22/photo1647918565447-1647918565543359042692.jpg',
    'https://cms-i.autodaily.vn/du-lieu/2022/01/24/adt-7446-copy.jpg',
    'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg',
  ];
  indexImg: any = 0;
  iconAndLabel: {
    icon: string;
    label: string;
  };
  iconPath: string;

  constructor() {}

  ngOnInit(): void {
    if (this.post.caption!.length >= 100) {
      this.cutContent = this.post.caption!.slice(0, 100);
    }
  }

  showFullContent() {
    this.cutContent = this.post.caption!;
    this.readMore = '';
  }
  nextImg() {
    if (this.indexImg < this.listImg.length) {
      this.indexImg++;
    }
  }
  prevImg() {
    if (this.indexImg >= 1) {
      this.indexImg--;
    }
  }
}
