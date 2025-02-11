import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHoverBackground]',
})
export class HoverBackgroundDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private el: ElementRef, private re: Renderer2) {
    // this.re.setStyle(this.el.nativeElement, 'background-color', 'gray');
    // this.re.setStyle(this.el.nativeElement, 'background-color', 'gray');
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    // this.re.setStyle(this.el.nativeElement, 'background-color', 'gray');
    this.backgroundColor = 'gray';
  }
  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // this.re.setStyle(this.el.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }
}
