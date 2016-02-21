import {Input, Component, NgZone, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {Subject} from 'rxjs/Rx';
import {ComponentSeventeen} from './component-seventeen';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-nine',
  template: `
    <a class="on-push">Cmp9</a>

    <ul>
      <li><cmp-seventeen [model]="model"></cmp-seventeen></li>
    </ul>
  `,
  directives: [ComponentSeventeen],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentNine {

  @Input() model:Subject<any>;

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}
