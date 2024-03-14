import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonHighlight]'
})
export class ButtonHighlightDirective  implements OnInit {
    @Input() defaultColor: string;
    @Input() highlightColor: string;
    @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private element: ElementRef, private render: Renderer2){ }

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
   // this.render.setStyle(this.element.nativeElement, 'background-color', 'aliceblue' )
   this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseexit(eventData: Event) {
   // this.render.setStyle(this.element.nativeElement, 'background-color', 'rgb(141, 186, 224)')
   this.backgroundColor = this.defaultColor;
  }
}
