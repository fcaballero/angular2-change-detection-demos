import {Component} from 'angular2/core';

import {ComponentOne} from './component-one';

@Component({
  selector: 'manual-cd',
  template: `
    <h2>Manual Change Detection</h2>
    <p>This demo shows how change detection subtrees are detached
    and change detection is performed manually.</p>


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
export class ManualChangeDetection {

}
