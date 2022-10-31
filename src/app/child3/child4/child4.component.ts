import {Component, ElementRef, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import {xd} from "../../xd";


@Component({
  selector: 'app-child2',
  template: `
    <a>1 --> 2</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements DoCheck{

  constructor(private el: ElementRef) {}

  ngDoCheck() {
    xd(this.el);
    console.log('CD - Child2Component');
  }
}
