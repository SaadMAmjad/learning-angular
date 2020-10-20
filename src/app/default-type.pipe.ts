import { Pipe, PipeTransform } from '@angular/core';
import {Content} from './helper-files/content-interface';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(stuff: Content[], type: string): Content[] {
    let filteredArray: Content[] = [];
    for (let entry of stuff) {
      if (entry.type === type) {
        filteredArray.push(entry);
      }
    }
    return filteredArray;
  }

}
