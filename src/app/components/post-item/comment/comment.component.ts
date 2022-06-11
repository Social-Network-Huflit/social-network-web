import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { PostComment, PostShareComment } from 'src/graphql/graphql';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  showInteract: boolean = false;
  @ViewChild('emotion') emotion: ElementRef;
  @Input() comment: PostComment | PostShareComment;

  constructor(private renderer: Renderer2) {
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
}
