import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  NgZone,
  AfterViewChecked,
} from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SinglePostComponent implements OnInit, AfterViewChecked {
  @Input() post: any;

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit(): void {}

  onTitleChanged(value: string) {
    // immutable way
    const post = this.post;
    const newPost = { ...post };
    newPost.title = value;
    this.post = newPost;

    // mutable way
    // this.post.title = value;
    // this.cd.markForCheck();
  }

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.classList.add('highlight');
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }
}
