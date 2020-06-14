import {Component, OnInit} from '@angular/core';
import {SimpleServiceService} from '../simple-service.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  number = 1;

  constructor(private readonly simpleServiceService: SimpleServiceService) {
  }

  ngOnInit() {
    this.simpleServiceService.randomNumberSubject.subscribe((randomNumber: number) => {
      this.number = randomNumber;
    });
  }

  onButtonClicked() {
    this.number = this.number * 2;
  }

  onButtonRandomClicked(randomNumber: number) {
    this.number = randomNumber;
  }

}
