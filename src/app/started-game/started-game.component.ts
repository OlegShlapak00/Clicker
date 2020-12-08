import { Component, OnInit } from '@angular/core';
import {GameSettingsService} from '../game-settings.service';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-started-game',
  templateUrl: './started-game.component.html',
  styleUrls: ['./started-game.component.scss']
})
export class StartedGameComponent implements OnInit {
  score;
  timeLeft;
  constructor(private setting: GameSettingsService, private router: Router) { }

  ngOnInit(): void {
    this.timeLeft = this.setting.getTime();
    this.score = 0;
    const Interval = setInterval( () => {
      if (this.timeLeft === 0){
        clearInterval(Interval);
        switch (this.setting.currentDuration){
          case 10: {
            this.setting.setBest10(this.score);
            break;
          }
          case 15: {
            this.setting.setBest15(this.score);
            break;
          }
          case 20: {
            this.setting.setBest20(this.score);
            break;
          }
        }
        this.router.navigate(['/start']);
      }
      this.timeLeft--;
    }, 1000);
  }
  buttonClick(): any{
    this.score++;
  }
}
