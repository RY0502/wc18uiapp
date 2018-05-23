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
  team1: String;
  team2: String;
  teamHomeImagePath: String;
  teamAwayImagePath: String;

  constructor(private nextMatchService: WcNextMatchService) { }

  getNextMatchDate(): void {
    this.nextMatchService.getNextMatchDate().subscribe(data => {
      this.nextmatch = new Date(data.matchdate);
      this.team1 = data.teamhome;
      this.team2 = data.teamaway;
      const teamHomeflag = data.teamhome.split(' ');
      let finalName = '';
      if ( teamHomeflag.length > 1) {
        finalName = teamHomeflag[0] + '_' + teamHomeflag[1];
      } else {
        finalName = teamHomeflag;
      }
      this.teamHomeImagePath = '/assets/' + finalName + '.png';
      const teamAwayflag = data.teamaway.split(' ');
      if ( teamAwayflag.length > 1) {
        finalName = teamAwayflag[0] + '_' + teamAwayflag[1];
      } else {
        finalName = teamAwayflag;
      }
      this.teamAwayImagePath = '/assets/' + finalName + '.png';
      this.updateTimer(); });
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
