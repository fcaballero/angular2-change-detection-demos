import {Component, ChangeDetectorRef, ViewChild} from 'angular2/core';
import {Subject} from 'rxjs/Rx';
import {ComponentOne} from './component-one';
import {ToggleStateService} from '../../services/toggle-state-service';

@Component({
  selector: 'default-cd',
  template: `
    <h2>Default Change Detection</h2>
    <p>This demo shows how change detection is performed for each
    component after every VM turn. <br>All components should light up when:</p>


    <ol class="list">
      <li>The app is bootstrapped (reload browser to double-check)</li>
      <li>The "Trigger CD" button is clicked</li>
    </ol>

    <div>
      <button (click)="null">Trigger Change Detection</button>
    </div>
    <div class="tree">
      <ul>
        <li>
          <cmp-one></cmp-one>
        </li>
      </ul>
    </div>
    <div style="margin-bottom: 5em; clear: both;"></div>
  `,
  directives: [ComponentOne]
})
export class DefaultChangeDetection {

  @ViewChild('checkbox') checkbox;
  notifier:Subject<any>;
  runInterval:boolean;

  constructor(private toggleStateService: ToggleStateService) {}

  notifyInterval(runInterval) {
    this.toggleStateService.runInterval = runInterval;
    this.notifier.next(runInterval)
  }
}
