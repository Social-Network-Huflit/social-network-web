import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

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

  constructor(private renderer: Renderer2) {
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
}
