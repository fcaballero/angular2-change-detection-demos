import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-fiveteen',
  template: `
    <a class="on-push">Cmp15</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFiveteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
