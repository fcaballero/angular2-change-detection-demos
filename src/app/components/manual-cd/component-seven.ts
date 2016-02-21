import {Component, NgZone, ElementRef} from 'angular2/core';
import {ComponentFourteen} from './component-fourteen';
import {ComponentFiveteen} from './component-fiveteen';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-seven',
  template: `
    <a>Cmp7</a>

    <ul>
      <li><cmp-fourteen></cmp-fourteen></li>
      <li><cmp-fiveteen></cmp-fiveteen></li>
    </ul>
  `,
  directives: [ComponentFourteen, ComponentFiveteen]
})
export class ComponentSeven {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
