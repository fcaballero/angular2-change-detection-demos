import {Component, NgZone, ElementRef} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-seven',
  template: `
    <a>Cmp7</a>
  `
})
export class ComponentSeven {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
