import {Component, NgZone, ElementRef} from 'angular2/core';
import {ComponentFour} from './component-four';
import {ComponentFive} from './component-five';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-two',
  template: `
    <a>Cmp2</a>

    <ul>
      <li><cmp-four></cmp-four></li>
      <li><cmp-five></cmp-five></li>
    </ul>
  `,
  directives: [ComponentFour, ComponentFive]
})
export class ComponentTwo {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

