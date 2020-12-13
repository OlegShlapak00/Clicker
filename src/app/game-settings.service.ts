import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameSettingsService {
  time;
  currentDuration;
  bestPlayer10 = 'Me';
  bestPlayer15 = 'Me';
  bestPlayer20 = 'Me';
  bestScore10 = 1;
  bestScore15 = 2;
  bestScore20 = 3;
  playerName;

  constructor() {
  }

  setTime(t): any {
    this.time = t;
  }

   setBest10(t): any {
    if (t > this.bestScore10) {
      this.bestScore10 = t;
      this.bestPlayer10 = this.playerName;
    }
  }
  setBest15(t): any {
    if (t > this.bestScore15) {
      this.bestScore15 = t;
      this.bestPlayer15 = this.playerName;
    }
  }
  setBest20(t): any {
    if (t > this.bestScore20) {
      this.bestScore20 = t;
      this.bestPlayer20 = this.playerName;
    }
  }

  getTime(): number {
    return this.time;
  }

  async getBest10(): Promise<number>{   // experiment
    return this.bestScore10;
  }
  getBest15(): number {
    return this.bestScore15;
  }
  getBest20(): number {
    return this.bestScore20;
  }

  setPlayerName(t): any {
    this.playerName = t;
  }
}
