import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeOptimizationComponent } from './pipe-optimization.component';

describe('PipeOptimizationComponent', () => {
  let component: PipeOptimizationComponent;
  let fixture: ComponentFixture<PipeOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
