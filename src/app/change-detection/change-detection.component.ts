import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionComponent implements OnInit {
  posts = [
    { title: 'Title1', description: 'This is title 1' },
    { title: 'Title2', description: 'This is title 2' },
    { title: 'Title3', description: 'This is title 3' },
  ];
  numberOfTicks = 0;

  constructor(private ref: ChangeDetectorRef) {
    setTimeout(() => {
      this.numberOfTicks++;
      // require view to be updated
      this.ref.markForCheck();
    }, 2000);
  }

  ngOnInit(): void {}

  onEditTitle(newTitle: string) {
    // this will not work in case of ChangeDetectionStrategy.OnPush
    // this.posts[0].title = newTitle;

    // works in case of ChangeDetectionStrategy.OnPush because we are changing the @input() property.
    const post = this.posts[0];
    const newPost = { ...post };
    newPost.title = newTitle;
    this.posts[0] = newPost;
  }
}
