import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSelectable]'
})
export class SelectableDirective {


  @Input('appSelectable') color;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.border = `${this.color} 3px solid`;

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = null;
  }


}
