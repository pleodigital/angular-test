import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.scss']
})
export class OutputChildComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonRandomClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.buttonClicked.emit();
  }

  onRandomClick() {
    const randomNumber = Math.round(Math.random() * 100);
    this.buttonRandomClicked.emit(randomNumber);
  }

}
