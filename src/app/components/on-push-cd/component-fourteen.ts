import {Component, NgZone, ElementRef} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-fourteen',
  template: `
    <a>Cmp14</a>
  `
})
export class ComponentFourteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
