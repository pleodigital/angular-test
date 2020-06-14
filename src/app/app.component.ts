import {Component} from '@angular/core';
import {SimpleServiceService} from './simple-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly simpleServiceService: SimpleServiceService) {
  }

  onCallRxJsSubject() {
    const randomNumber = Math.round(Math.random() * 100);
    this.simpleServiceService.randomNumberSubject.next(randomNumber);
  }
}
