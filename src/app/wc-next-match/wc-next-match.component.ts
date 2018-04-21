import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { WcNextMatchService } from '../wc-next-match.service';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-wc-next-match',
  templateUrl: './wc-next-match.component.html',
  styleUrls: ['./wc-next-match.component.css']
})
export class WcNextMatchComponent implements OnInit {

  nextmatch: Date;
  leftdays: number;
  lefthours: number;
  leftminutes: number;
  leftseconds: number;

  constructor(private nextMatchService: WcNextMatchService) { }

  getNextMatchDate(): void {
    this.nextMatchService.getNextMatchDate().subscribe(matchDate => {this.nextmatch = matchDate; this.updateTimer(); });
  }

  ngOnInit() {
    this.getNextMatchDate();
  }

  updateTimer() {
    Observable.interval(1000).subscribe(x => {this.getTimeLeft(); });
  }

  getTimeLeft () {
    console.log('called...getTimeLeft');
    const currentdate = new Date();
    let diffmillsecs = this.nextmatch.getTime() - currentdate.getTime();
    this.leftdays = Math.floor(diffmillsecs / (24 * 60 * 60 * 1000));
    diffmillsecs = diffmillsecs % (24 * 60 * 60 * 1000);
    this.lefthours = Math.floor(diffmillsecs / (60 * 60 * 1000));
    diffmillsecs = diffmillsecs % (60 * 60 * 1000);
    this.leftminutes = Math.floor(diffmillsecs / (60 * 1000));
    diffmillsecs = diffmillsecs % (60 * 1000);
    this.leftseconds = Math.floor(diffmillsecs / (1000));
    diffmillsecs = diffmillsecs % (1000);
  }

}
