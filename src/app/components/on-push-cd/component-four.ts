import {Component, NgZone, ElementRef} from 'angular2/core';
import {ComponentEight} from './component-eight';
import {ComponentNine} from './component-nine';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-four',
  template: `
    <a>Cmp4</a>

    <ul>
      <li><cmp-eight></cmp-eight></li>
      <li><cmp-nine></cmp-nine></li>
    </ul>
  `,
  directives: [ComponentEight, ComponentNine]
})
export class ComponentFour {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }

  triggerChangeDetection () { }
}

