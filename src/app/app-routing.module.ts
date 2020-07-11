import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { NgzoneComponent } from './ngzone/ngzone.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'change-detection', component: ChangeDetectionComponent },
  { path: 'ngzone', component: NgzoneComponent },
  { path: 'async-pipe', component: AsyncPipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
