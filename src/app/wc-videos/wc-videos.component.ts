import { Component, OnInit } from '@angular/core';
import { WcVideosService } from '../wc-videos.service';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-wc-videos',
  templateUrl: './wc-videos.component.html',
  styleUrls: ['./wc-videos.component.css']
})
export class WcVideosComponent implements OnInit {

  videos: Array<{id: String, title: String, channel: String, videourl: SafeUrl}>;

  constructor(private videosService: WcVideosService,
    private sanitizer: DomSanitizer) { }

  getVideos(): void {
    this.videos = [];
    this.videosService.getTrendingVideos().subscribe(data => {
      const videodata = data.videos;
      for (let index = 0; index < (videodata.length) - 1 ; index++) {
        const element = videodata[index];
        const url = this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/' + element.id + '?res=0');
        this.videos.push({id: element.id, title: element.title, channel: element.channelId, videourl: url});
      }
    });
  }

  ngOnInit() {
    this.getVideos();
  }

}
