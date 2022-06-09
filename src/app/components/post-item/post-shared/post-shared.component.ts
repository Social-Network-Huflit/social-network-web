import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from '../../dialogs/share-dialog/share-dialog.component';

@Component({
  selector: 'app-post-shared',
  templateUrl: './post-shared.component.html',
  styleUrls: ['./post-shared.component.scss'],
})
export class PostSharedComponent implements OnInit {
  @ViewChild('emotion') emotion: ElementRef;

  showInteract: boolean = false;
  showComment: boolean = false;
  showShare: boolean = false;
  showContextMenu: boolean = false;

  constructor(private renderer: Renderer2, public dialog: MatDialog) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.emotion) {
        if (e.target !== this.emotion.nativeElement) {
          this.showInteract = false;
        }
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
