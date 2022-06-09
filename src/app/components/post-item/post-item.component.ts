import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ShareDialogComponent } from '../dialogs/share-dialog/share-dialog.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @ViewChild('emotion') emotion: ElementRef;

  showInteract: boolean = false;
  showComment: boolean = false;
  showShare: boolean = false;
  showContextMenu: boolean = false;
  content: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thes industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.";
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

  constructor(private renderer: Renderer2, public dialog: MatDialog) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.emotion) {
        if (e.target !== this.emotion.nativeElement) {
          this.showInteract = false;
        }
      }
    });
  }

  ngOnInit(): void {
    if (this.content.length >= 100) {
      this.cutContent = this.content.slice(0, 100);
    }
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

  showFullContent() {
    this.cutContent = this.content;
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

  openDialog(): void {
    this.dialog.open(ShareDialogComponent, {
      width: '700px',
      panelClass: 'dialog-container',
    });
  }
}
