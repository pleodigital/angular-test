import {Component, OnInit} from '@angular/core';
import {ICar, SimpleServiceService} from '../simple-service.service';

@Component({
  selector: 'app-simple-service',
  templateUrl: './simple-service.component.html',
  styleUrls: ['./simple-service.component.scss']
})
export class SimpleServiceComponent implements OnInit {
  cars: ICar[] = [];

  constructor(private readonly simpleServiceService: SimpleServiceService) {
  }

  ngOnInit() {
    this.cars = this.simpleServiceService.fetchCars();
  }

}
