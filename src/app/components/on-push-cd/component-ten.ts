import {Component, NgZone, ElementRef} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-ten',
  host: {
    '(click)': 'triggerChangeDetection()'
  },
  template: `
    <a class="click-me">Cmp10</a>
  `
})
export class ComponentTen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection () { }
}
