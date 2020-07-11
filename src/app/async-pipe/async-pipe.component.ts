import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css'],
})
export class AsyncPipeComponent implements OnInit {
  posts$: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.posts$ = this.http.get<any>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
