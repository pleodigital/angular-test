import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export interface ICar {
  brand: string;
  model: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {
  randomNumberSubject: Subject<number> = new Subject<number>();

  constructor() {
  }

  fetchCars(): ICar[] {
    return [{
      brand: 'Volvo',
      model: 'XC60',
      year: 2018
    }, {
      brand: 'Volvo',
      model: 'XC60',
      year: 2018
    }, {
      brand: 'Volvo',
      model: 'XC60',
      year: 2018
    }, {
      brand: 'Volvo',
      model: 'XC60',
      year: 2018
    }, {
      brand: 'Volvo',
      model: 'XC60',
      year: 2018
    }, {
      brand: 'Volvo',
      model: 'XC60',
      year: 2018
    }];
  }
}
