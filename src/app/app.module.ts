import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { SinglePostComponent } from './change-detection/single-post/single-post.component';
import { NgzoneComponent } from './ngzone/ngzone.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChangeDetectionComponent,
    SinglePostComponent,
    NgzoneComponent,
    AsyncPipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
