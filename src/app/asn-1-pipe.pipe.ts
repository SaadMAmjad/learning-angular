import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asn1Pipe'
})
export class Asn1PipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
