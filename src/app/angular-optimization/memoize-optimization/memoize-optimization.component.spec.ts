import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoizeOptimizationComponent } from './memoize-optimization.component';

describe('MemoizeOptimizationComponent', () => {
  let component: MemoizeOptimizationComponent;
  let fixture: ComponentFixture<MemoizeOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoizeOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoizeOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
