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

@NgModule({
  declarations: [
    AppComponent,
    WcNextMatchComponent,
    WcnavbarComponent,
    WccarouselComponent,
    LastMatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WcNextMatchService,
    WcLastMatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
