import {Component, NgZone, ElementRef} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-twelve',
  host: {
    '(click)': 'triggerChangeDetection()'
  },
  template: `
    <a class="click-me">Cmp12</a>
  `
})
export class ComponentTwelve {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection() {
  }
}
