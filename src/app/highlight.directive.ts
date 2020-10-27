import {Directive, ElementRef, Input, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input () type: string;

  constructor(private elm: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    if (this.type === 'title') {
      this.elm.nativeElement.style.textDecoration = 'underline';
    }
    else if (this.type === 'tags') {
      this.elm.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    if (this.type === 'title') {
      this.elm.nativeElement.style.textDecoration = 'none';
    }
    else if (this.type === 'tags') {
      this.elm.nativeElement.style.fontWeight = 'normal';
    }
  }

}
