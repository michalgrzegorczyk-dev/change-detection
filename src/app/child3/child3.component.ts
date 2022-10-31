import {Component, ElementRef, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import {kolorek} from "../kolorek";
@Component({
  selector: 'app-child3',
  template: `
    <a>3</a>
    <app-child4></app-child4>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child3Component implements DoCheck{

  constructor(private el: ElementRef) {}

  ngDoCheck() {
    kolorek(this.el);
    console.log('CD - Child3Component');
  }
}
