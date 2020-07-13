import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent implements OnInit {
  accountId: number = 1234;
  accountStatus: string = 'Active';

  constructor() {}

  ngOnInit(): void {}

  getValue() {
    return `account number is ${this.accountId}`;
  }
}
