import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WcNextMatchComponent } from './wc-next-match/wc-next-match.component';
import { WcNextMatchService } from './wc-next-match.service';

import { HttpClientModule } from '@angular/common/http';
import { WcnavbarComponent } from './wcnavbar/wcnavbar.component';
import { WccarouselComponent } from './wccarousel/wccarousel.component';
import { LastMatchComponent } from './last-match/last-match.component';
import { WcLastMatchService } from './wc-last-match.service';
import { WcNewsService } from './wc-news.service';
import { WcVideosComponent } from './wc-videos/wc-videos.component';
import { WcVideosService } from './wc-videos.service';

@NgModule({
  declarations: [
    AppComponent,
    WcNextMatchComponent,
    WcnavbarComponent,
    WccarouselComponent,
    LastMatchComponent,
    WcVideosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WcNextMatchService,
    WcLastMatchService,
    WcNewsService,
    WcVideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
