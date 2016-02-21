import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-sixteen',
  template: `
    <a class="on-push">Cmp16</a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentSixteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection() {}
}
