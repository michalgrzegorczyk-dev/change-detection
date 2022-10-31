import {Component, ElementRef, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import {kolorek} from "../kolorek";
@Component({
  selector: 'app-child1',
  template: `
    <a>1</a>
    <app-child2></app-child2>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class Child1Component implements DoCheck{

  constructor(private el: ElementRef) {}

  ngDoCheck() {
    kolorek(this.el);
    console.log('CD - Child1Component');
  }
}
