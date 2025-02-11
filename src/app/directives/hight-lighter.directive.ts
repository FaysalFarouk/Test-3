import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightLighter]',
})
export class HightLighterDirective {
  @Input() textColor: string = 'black'; // Default color

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.textColor);
  }
}
