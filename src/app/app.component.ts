import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'black-jack';
  started: boolean = false


  start(started: boolean) {
    this.started = started
  }
}
