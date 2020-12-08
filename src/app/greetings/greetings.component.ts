import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GameSettingsService} from '../game-settings.service';
@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss']
})
export class GreetingsComponent implements OnInit {
  playerName = 'Player' ;
  constructor(private router: Router, private settings: GameSettingsService) { }

  ngOnInit(): void {
  }
  startGame(): any{
    if (this.playerName){
      this.settings.setPlayerName(this.playerName);
      this.router.navigate(['/start']);
    }
  }

}
