import {Component, NgZone, ElementRef} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-sixteen',
  template: `
    <a>Cmp16</a>
  `
})
export class ComponentSixteen {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
