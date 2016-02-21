import {Component, NgZone, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {ComponentTen} from './component-ten';
import {ComponentEleven} from './component-eleven';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-five',
  template: `
    <a class="on-push">Cmp5</a>

    <ul>
      <li><cmp-ten></cmp-ten></li>
      <li><cmp-eleven></cmp-eleven></li>
    </ul>
  `,
  directives: [ComponentTen, ComponentEleven],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentFive {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

