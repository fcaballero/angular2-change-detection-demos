import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-thirteen',
  template: `
    <a class="on-push">Cmp13</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentThirteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
