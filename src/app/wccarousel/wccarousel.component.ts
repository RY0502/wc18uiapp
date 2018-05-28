import { Component, OnInit } from '@angular/core';
import { WcNewsService } from '../wc-news.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-wccarousel',
  templateUrl: './wccarousel.component.html',
  styleUrls: ['./wccarousel.component.css']
})
export class WccarouselComponent implements OnInit {

  news: Array<{captions: String, imagesUrls: String, articleUrls: String}>;

  constructor(private newsService: WcNewsService) { }

  getNews(): void {
    this.news = [];
    this.newsService.getNews().subscribe(data => {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        this.news.push({captions: element.title, imagesUrls: environment.baseurl + element.urlToImage, articleUrls: element.url});
      }
    });
  }

  ngOnInit() {
    this.getNews();
  }

}
