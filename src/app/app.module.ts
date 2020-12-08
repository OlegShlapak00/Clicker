import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GreetingsComponent } from './greetings/greetings.component';
import {FormsModule} from '@angular/forms';
import { StartGameComponent } from './start-game/start-game.component';
import { StartedGameComponent } from './started-game/started-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingsComponent,
    StartGameComponent,
    StartedGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
