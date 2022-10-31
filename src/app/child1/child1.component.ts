import {Component, ElementRef, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {kolorek} from "../kolorek";
@Component({
  selector: 'app-child1',
  template: `
    <a>1</a>
    <button (click)="triggerDetection()">cd 1</button>
    <app-child2></app-child2>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class Child1Component implements DoCheck{

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) {}

  ngDoCheck() {
    kolorek(this.el);
    console.log('CD - Child1Component');
  }

  triggerDetection() {
    this.cd.detectChanges();
  }
}
