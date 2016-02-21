import {Component, NgZone, ElementRef} from 'angular2/core';
import {ComponentSix} from './component-six';
import {ComponentSeven} from './component-seven';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-three',
  template: `
    <a>Cmp3</a>

    <ul>
      <li><cmp-six></cmp-six></li>
      <li><cmp-seven></cmp-seven></li>
    </ul>
  `,
  directives: [ComponentSix, ComponentSeven]
})
export class ComponentThree {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
