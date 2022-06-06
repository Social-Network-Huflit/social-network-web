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

  constructor(private renderer: Renderer2, public dialog: MatDialog) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.emotion.nativeElement) {
        this.showInteract = false;
      }
    });
  }

  ngOnInit(): void {}

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
}
