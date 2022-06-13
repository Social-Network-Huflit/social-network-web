import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appLongPress]',
})
export class LongPressDirective {
  @Output()
  longPress = new EventEmitter();

  private _timeout: any;

  constructor() {}

  @HostListener('mouseenter') onMouseEnter(e: Event) {
    this._timeout = setTimeout(() => {
      this.longPress.emit(e);
    }, 500);
  }

  @HostListener('mouseleave') onMouseLeave(e: Event) {
    clearTimeout(this._timeout)
  }
}
