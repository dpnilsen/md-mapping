import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidator]'
})
export class ValidatorDirective {
  @HostBinding('attr.role') role = 'button';
  @HostListener('mouseenter') onMouseEnter() {
    // do work
  }
}
