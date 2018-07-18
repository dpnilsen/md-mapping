import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// https://angular.io/api/platform-browser/DomSanitizer

@Pipe({ name: 'keepStyle', pure: false })
export class EscapeStylePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(content) {
    return this.sanitizer.bypassSecurityTrustStyle(content);
  }
}
