import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-exercise';
  game = "Pandemic";
  usergame = "";
  whichGame() {
    if (this.game.length <= this.usergame.length) {
      console.log("Ok, let's play" + this.usergame)
    }
    else {
      console.log("Ok, we're going to play" + this.game + "anyways")
    }

  }
}
