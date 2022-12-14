import {Component, ElementRef, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import {kolorek} from "../../kolorek";


@Component({
  selector: 'app-child4',
  template: `
    <a>3 --> 4</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child4Component implements DoCheck{

  constructor(private el: ElementRef) {}

  ngDoCheck() {
    kolorek(this.el);
    console.log('CD - Child4Component');
  }
}
