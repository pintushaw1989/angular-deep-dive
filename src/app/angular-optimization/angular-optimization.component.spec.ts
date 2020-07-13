import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOptimizationComponent } from './angular-optimization.component';

describe('AngularOptimizationComponent', () => {
  let component: AngularOptimizationComponent;
  let fixture: ComponentFixture<AngularOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
