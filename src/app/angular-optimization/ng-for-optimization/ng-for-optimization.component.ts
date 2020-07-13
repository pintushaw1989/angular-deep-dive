import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-optimization',
  templateUrl: './ng-for-optimization.component.html',
  styleUrls: ['./ng-for-optimization.component.css'],
})
export class NgForOptimizationComponent implements OnInit {
  collections = [{ id: 'one' }, { id: 'two' }, { id: 'three' }];

  constructor() {}

  ngOnInit(): void {}

  getItems() {
    // this.collections.push({ id: 'four' });
    this.collections = [
      { id: 'one' },
      { id: 'two' },
      { id: 'three' },
      { id: 'four' },
    ];
  }

  trackByFn(index, item) {
    return item.id; // unique id corresponding to the item
  }
}
