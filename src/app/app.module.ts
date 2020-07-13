import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RankPipe } from './angular-optimization/pipe-optimization/rank.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

import { AngularBasicComponent } from './angular-basic/angular-basic.component';
import { InterpolationComponent } from './angular-basic/interpolation/interpolation.component';
import { InputOutputComponent } from './angular-basic/input-output/input-output.component';

import { AngularOptimizationComponent } from './angular-optimization/angular-optimization.component';
import { ChangeDetectionComponent } from './angular-optimization/change-detection/change-detection.component';
import { SinglePostComponent } from './angular-optimization/change-detection/single-post/single-post.component';
import { NgzoneComponent } from './angular-optimization/ngzone/ngzone.component';
import { PipeOptimizationComponent } from './angular-optimization/pipe-optimization/pipe-optimization.component';
import { NgForOptimizationComponent } from './angular-optimization/ng-for-optimization/ng-for-optimization.component';
import { MemoizeOptimizationComponent } from './angular-optimization/memoize-optimization/memoize-optimization.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangeDetectionComponent,
    SinglePostComponent,
    NgzoneComponent,
    AsyncPipeComponent,
    AngularBasicComponent,
    InterpolationComponent,
    InputOutputComponent,
    PageNotFoundComponent,
    PipeOptimizationComponent,
    RankPipe,
    NgForOptimizationComponent,
    MemoizeOptimizationComponent,
    AngularOptimizationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
