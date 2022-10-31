import {
  Component,
  ApplicationRef,
  DoCheck,
  ɵdetectChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements DoCheck {

  constructor(private applicationRef: ApplicationRef, private changeDetectorRef: ChangeDetectorRef) {
  }

  tick() {
    this.applicationRef.tick();
    console.log('CD TICK ROOT')
  }

  ngDoCheck() {
    console.log('DO CHECK ROOT')
  }

  cd() {
    console.log('CD TRIGGER ROOT');
    this.changeDetectorRef.detectChanges();
  }
}
