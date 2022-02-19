import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightUser]',
})
export class HighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor!: string;
  @HostBinding('style.color') color!: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red';
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');

    // (<HTMLElement>this.element.nativeElement).classList.add('highlight');
    this.renderer.addClass(this.element.nativeElement, 'highlight');
  }

  @HostListener('mouseenter') onmouseover(event: Event) {
    // this.renderer.setStyle(this.element.nativeElement, 'background-color', '#fff');
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'blueviolet');

    this.bgColor = '#fff';
    this.color = 'blueviolet';
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.bgColor = 'blueviolet';
    this.color = '#fff';
  }

  @HostListener('mousedown') onmousedown(event: Event) {
    this.bgColor = 'red';
    this.color = '#fff';
  }

  @HostListener('mouseup') onmouseup(event: Event) {
    this.bgColor = '#fff';
    this.color = 'blueviolet';
  }
}
