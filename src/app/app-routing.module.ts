import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { InterpolationComponent } from './angular-basic/interpolation/interpolation.component';
import { InputOutputComponent } from './angular-basic/input-output/input-output.component';

import { AngularOptimizationComponent } from './angular-optimization/angular-optimization.component';
import { ChangeDetectionComponent } from './angular-optimization/change-detection/change-detection.component';
import { NgzoneComponent } from './angular-optimization/ngzone/ngzone.component';
import { PipeOptimizationComponent } from './angular-optimization/pipe-optimization/pipe-optimization.component';
import { NgForOptimizationComponent } from './angular-optimization/ng-for-optimization/ng-for-optimization.component';
import { MemoizeOptimizationComponent } from './angular-optimization/memoize-optimization/memoize-optimization.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'basic',
    component: AngularBasicComponent,
    children: [
      { path: 'interpolation', component: InterpolationComponent },
      { path: 'input-output', component: InputOutputComponent },
    ],
  },
  {
    path: 'optimization',
    component: AngularOptimizationComponent,
    children: [
      { path: 'change-detection', component: ChangeDetectionComponent },
      { path: 'ngzone', component: NgzoneComponent },
      { path: 'pipe', component: PipeOptimizationComponent },
      { path: 'ng-for', component: NgForOptimizationComponent },
      { path: 'memoize', component: MemoizeOptimizationComponent },
    ],
  },
  { path: 'async-pipe', component: AsyncPipeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
