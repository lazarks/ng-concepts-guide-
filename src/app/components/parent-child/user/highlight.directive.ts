import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[highlightUser]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    (<HTMLElement>this.element.nativeElement).classList.add('highlight');
    // (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red';
  }
}
