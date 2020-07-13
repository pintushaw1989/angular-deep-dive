import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rank',
})
export class RankPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('called');
    if (value < 1000) {
      return 'beginner';
    }
    return 'expert';
  }
}
