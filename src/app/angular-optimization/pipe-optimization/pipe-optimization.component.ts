import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-optimization',
  templateUrl: './pipe-optimization.component.html',
  styleUrls: ['./pipe-optimization.component.css'],
})
export class PipeOptimizationComponent implements OnInit {
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

  // getTitle(points) {
  //   console.log('called' + this.counter++);
  //   if (points < 1000) {
  //     return 'beginner';
  //   }
  //   return 'expert';
  // }
}
