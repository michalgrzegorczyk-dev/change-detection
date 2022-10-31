import {Component, ElementRef, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import {kolorek} from "../../kolorek";


@Component({
  selector: 'app-child2',
  template: `
    <a>1 --> 2</a>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class Child2Component implements DoCheck{

  constructor(private el: ElementRef) {}

  ngDoCheck() {
    kolorek(this.el);
    console.log('CD - Child2Component');
  }
}
