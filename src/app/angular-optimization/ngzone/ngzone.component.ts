import { Component, OnInit, DoCheck, NgZone } from '@angular/core';

@Component({
  selector: 'app-ngzone',
  templateUrl: './ngzone.component.html',
  styleUrls: ['./ngzone.component.css'],
})
export class NgzoneComponent implements OnInit, DoCheck {
  counter = 0;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => this.counter++);
      }

      this.zone.run(() => {
        setTimeout(() => (this.counter = this.counter), 1000);
      });
    });
  }

  ngDoCheck() {
    console.log('Change detection has been run!');
  }
}
