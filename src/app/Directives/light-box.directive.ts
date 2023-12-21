import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLightBox]',
})
export class LightBoxDirective {
  @Input() highlightColor: string = 'green';
  constructor(elemRef: ElementRef) {
    elemRef.nativeElement.style.border = `2px solid ${this.highlightColor}`;
  }
}
