import {Component, NgZone, ElementRef} from 'angular2/core';
import {ComponentSeventeen} from './component-seventeen';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-nine',
  template: `
    <a>Cmp9</a>

    <ul>
      <li><cmp-seventeen></cmp-seventeen></li>
    </ul>
  `,
  directives: [ComponentSeventeen]
})
export class ComponentNine {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
