import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WcNextMatchComponent } from './wc-next-match/wc-next-match.component';
import { WcNextMatchService } from './wc-next-match.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WcNextMatchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WcNextMatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
