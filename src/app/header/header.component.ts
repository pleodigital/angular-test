import {Component, OnDestroy, OnInit} from '@angular/core';
import {SimpleServiceService} from '../simple-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  number: number;

  subscribion: any;

  constructor(private readonly simpleServiceService: SimpleServiceService) {
  }

  ngOnInit() {
    this.subscribion = this.simpleServiceService.randomNumberSubject.subscribe((randomNumber: number) => {
      this.number = randomNumber * 3;
    });
  }

  ngOnDestroy(): void {
    this.subscribion.unsubscribe();
    this.subscribion = null;
  }

}
