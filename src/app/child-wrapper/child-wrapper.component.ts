import {Component, ChangeDetectionStrategy, DoCheck} from '@angular/core';

@Component({
  selector: 'app-child-wrapper',
  template: `
    <p>
      child-wrapper works!
    </p>
    <app-child1></app-child1>
    <app-child3></app-child3>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildWrapperComponent implements DoCheck {

  ngDoCheck() {
    console.log('wrapper CD')
  }


}
