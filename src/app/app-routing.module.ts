import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GreetingsComponent} from './greetings/greetings.component';
import {StartGameComponent} from './start-game/start-game.component';
import {StartedGameComponent} from './started-game/started-game.component';


const routes: Routes = [
  { path: 'greetings', component: GreetingsComponent },
  { path: 'start', component: StartGameComponent},
  { path: 'started', component: StartedGameComponent},
  { path: '',   redirectTo: '/greetings', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
