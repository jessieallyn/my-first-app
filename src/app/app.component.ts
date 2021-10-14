import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-exercise';
  game = "Pandemic";
  anygame = "something";
  usergame = "";
  play ="";
  onGame() {
    if (this.game.length <= this.usergame.length) {
      this.play = this.usergame;
    }
    if (this.usergame.length > 0 && this.game.length > this.usergame.length) {
      this.play = this.game;
    }
    if(this.usergame.length == 0) {
      this.play = this.anygame;
    }
    return this.play;
  }
}
