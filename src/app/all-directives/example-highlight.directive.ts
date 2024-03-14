import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appExampleHighlight]'
})
export class ExampleHighlightDirective  implements OnInit {
  constructor(private element: ElementRef, private render: Renderer2){ }

  ngOnInit() {
   // this.example.nativeElement.style.backgroundColor = 'black'; --> direct manipulation
   this.render.setStyle(this.element.nativeElement, 'background-color', 'black');
  }
}
