import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  @Input()
  set start(start: boolean) {
    if (start) {
      this.dealCard()
    }
  }

  public cards: Array<string> = ['blue', 'blue'];

  public ngOnInit(): void {

  }

  public dealCard() {
    const card = Math.floor(Math.random() * 52) + 1;

    this.cards[0] = this.cards[0] === 'blue' ? card.toString() : this.cards[0]
    return;
  }
}
