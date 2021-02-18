import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[meuFor]'
})
export class ForDirective implements OnInit {

  @Input('meuForEm')
  numbers: number[] = [];
  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {}

  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, { $implicit: number });
    }
  }
}
