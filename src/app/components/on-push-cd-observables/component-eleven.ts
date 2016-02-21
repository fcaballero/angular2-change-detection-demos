import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-eleven',
  template: `
    <a class="on-push">Cmp11</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentEleven {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
