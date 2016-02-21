import {Component, ViewEncapsulation, ViewChild, ChangeDetectorRef} from 'angular2/core';
import {Subject} from 'rxjs/Rx';
import {Router, Route, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ToggleStateService} from './services/toggle-state-service';
import {DefaultChangeDetection} from './components/default-cd/default-cd';
import {OnPushChangeDetection} from './components/on-push-cd/on-push-cd';
import {OnPushChangeDetectionObservables} from './components/on-push-cd-observables/on-push-cd-observables';
import {ManualChangeDetection} from './components/manual-cd/manual-cd';

@Component({
  selector: 'seed-app',
  templateUrl: 'app/seed-app.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app/seed-app.css'],
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  new Route({ path: '/default-change-detection', component: DefaultChangeDetection, name: 'DefaultChangeDetection', useAsDefault: true}),
  new Route({ path: '/on-push-change-detection', component: OnPushChangeDetection, name: 'OnPushChangeDetection'}),
  new Route({ path: '/on-push-change-detection-observables', component: OnPushChangeDetectionObservables, name: 'OnPushChangeDetectionObservables'}),
  new Route({ path: '/manual-change-detection', component: ManualChangeDetection, name: 'ManualChangeDetection'})
])
export class SeedApp {

  @ViewChild(DefaultChangeDetection) defaultChangeDetectionCmp: DefaultChangeDetection;
  @ViewChild(OnPushChangeDetection) onPushChangeDetectionCmp: OnPushChangeDetection;
  notifier: Subject<any> = new Subject();
  @ViewChild(OnPushChangeDetectionObservables) onPushChangeDetectionObservablesCmp: OnPushChangeDetectionObservables;
  @ViewChild(ManualChangeDetection) manualChangeDetectionCmp: ManualChangeDetection;

  constructor(private cd: ChangeDetectorRef, private toggleStateService: ToggleStateService) {}

  ngOnInit() {
    var intervalId;

    // this.notifier.subscribe((runInterval) => {
    //   if (runInterval) {
    //     this.cd.reattach();
    //     this.toggleStateService.runInterval = true;
    //     intervalId = setInterval(() => {
    //       this.cd.detectChanges();
    //     }, 5000);
    //   } else {
    //     clearInterval(intervalId);
    //     this.toggleStateService.runInterval = false;
    //     this.cd.detach();
    //   }
    // })
  }

  ngAfterViewChecked() {
    if (this.defaultChangeDetectionCmp) {
      this.defaultChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionCmp) {
      this.onPushChangeDetectionCmp.notifier = this.notifier;
    }

    if (this.onPushChangeDetectionObservablesCmp) {
      this.onPushChangeDetectionObservablesCmp.notifier = this.notifier;
    }

    if (this.manualChangeDetectionCmp) {
      this.manualChangeDetectionCmp.notifier = this.notifier;
    }
  }
}
