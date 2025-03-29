import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number',
  pure: true,
})
export class KmFormatterPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (!Number.isInteger(value)) {
      throw new Error(`${value} is not an integer`);
    }
    return Intl.NumberFormat('de-DE').format(value);
  }
}
