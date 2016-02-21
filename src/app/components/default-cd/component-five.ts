import {Component, NgZone, ElementRef} from 'angular2/core';
import {toggleClass} from '../../services/toggle-class';

@Component({
  selector: 'cmp-five',
  template: `
    <a>Cmp5</a>
  `
})
export class ComponentFive {

  constructor(private zone: NgZone, private el: ElementRef) {}

  ngAfterViewChecked() {
    toggleClass(this.el, this.zone);
  }
}

