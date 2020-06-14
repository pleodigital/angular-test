import {Component, OnInit, ViewChild} from '@angular/core';
import {ChildComponentComponent} from './child-component/child-component.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
  @ViewChild(ChildComponentComponent, {static: true}) childComponent: ChildComponentComponent;
  number = 30;

  constructor() {
  }

  ngOnInit() {
    this.childComponent.number = this.number;
  }

  onClick() {
    this.childComponent.duplicateNumber();
  }

}
