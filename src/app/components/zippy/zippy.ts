import {Component, Input} from 'angular2/core';

@Component({
  selector: 'zippy',
  templateUrl: 'app/components/zippy/zippy.html'
})
export class Zippy {
  @Input() title: string;
  visible: boolean;

  constructor(){
    this.visible = true;
  }

  toggle(){
    this.visible = !this.visible;
  }

}
