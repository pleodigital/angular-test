import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  number: number = null;

  constructor() {
  }

  ngOnInit() {
  }

  duplicateNumber() {
    this.number = this.number * 2;
  }

}
