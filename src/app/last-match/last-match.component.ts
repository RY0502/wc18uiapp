import { Component, OnInit } from '@angular/core';
import { WcLastMatchService } from '../wc-last-match.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-last-match',
  templateUrl: './last-match.component.html',
  styleUrls: ['./last-match.component.css']
})
export class LastMatchComponent implements OnInit {

  team1: String;
  team2: String;
  team1Goal: String;
  team2Goal: String;
  lastMatchDate: Date;
  teamHomeImagePath: String;
  teamAwayImagePath: String;

  constructor(private lastMatchService: WcLastMatchService) { }

  getLastMatchDetails(): void {

    this.lastMatchService.getLastMatch().subscribe(data => {
      this.lastMatchDate = new Date(data.matchdate);
      this.team1 = data.teamhome;
      this.team2 = data.teamaway;
      this.team1Goal = data.result[0].teamhomegoal;
      this.team2Goal = data.result[0].teamawaygoal;
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
    });
  }

  ngOnInit() {
    this.getLastMatchDetails();
  }

}
