import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[textBlue]'
})
export class TextBlueDirective {


  /*
     이 방식은 XSS공격을 받을 우려가 있어 권장하지 않는다.
   */
  /*constructor(el: ElementRef) {
    el.nativeElement.style.color = 'blue';
  }*/

  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'color', 'blue');
  }


  // 이벤트 처리
  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor('blue');
  }

  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
