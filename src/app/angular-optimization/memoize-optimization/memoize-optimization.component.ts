import { Component, OnInit } from '@angular/core';
import { memoize } from 'lodash-decorators';

@Component({
  selector: 'app-memoize-optimization',
  templateUrl: './memoize-optimization.component.html',
  styleUrls: ['./memoize-optimization.component.css'],
})
export class MemoizeOptimizationComponent implements OnInit {
  counter = 0;
  name = 'Angular';
  userList = [
    { name: 'SPA', points: 1000 },
    { name: 'Html', points: 850 },
    { name: 'Angular', points: 12250 },
    { name: 'jQuery', points: 1123 },
    { name: 'C sharp', points: 85 },
    { name: 'Java', points: 1187 },
    { name: 'JavaScript', points: 8150 },
    { name: 'Fortran', points: 340 },
    { name: 'F Sharp', points: 8150 },
    { name: 'CSS', points: 8150 },
  ];

  constructor() {}

  ngOnInit(): void {}

  @memoize
  getTitle(points) {
    console.log('called' + this.counter++);
    if (points < 1000) {
      return 'beginner';
    }
    return 'expert';
  }
}
