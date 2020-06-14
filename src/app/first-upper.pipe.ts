import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  constructor() {
  }

  transform(value: any, ...args: any[]): any {
    // Jeśli chcemy dodać ciąg znaków przed obecny tekst.
    // return `Pan/Pani ${value}`;
    const [startIndex, endIndex] = args; //  const startIndex = args[0]; const endIndex = args[1];
    return value.substr(startIndex, endIndex).toUpperCase() + value.substr(endIndex).toLowerCase();
  }

}
