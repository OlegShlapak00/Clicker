import { Component, OnInit } from '@angular/core';
import {GameSettingsService} from '../game-settings.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  best;
  gameTime = 10;
  bestPlayer;
  constructor(
    private settings: GameSettingsService,
    private location: Location,
    private router: Router
    ) { }
  startGame(): any{
    this.settings.setTime(this.gameTime);
    this.router.navigate(['/started']);
  }
  ngOnInit(): void {
    this.settings.currentDuration = 10;
    this.bestPlayer = this.settings.bestPlayer10;
    this.settings.getBest10().then(num => this.best = num);
  }
  getBest(event, value): any{
    switch (value){
      case 10: {
        this.best = this.settings.bestScore10;
        this.settings.currentDuration = 10;
        this.bestPlayer = this.settings.bestPlayer10;
        break;
      }
      case 15: {
        this.best = this.settings.bestScore15;
        this.settings.currentDuration = 15;
        this.bestPlayer = this.settings.bestPlayer15;
        break;
      }
      case 20: {
        this.best = this.settings.bestScore20;
        this.settings.currentDuration = 20;
        this.bestPlayer = this.settings.bestPlayer20;
        break;
      }
    }
  }

}
