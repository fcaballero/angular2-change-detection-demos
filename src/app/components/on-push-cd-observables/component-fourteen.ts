import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-fourteen',
  template: `
    <a class="on-push">Cmp14</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFourteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
