import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') onMouseEnter() {
    // do highlight work
  }
  constructor() { }

}
