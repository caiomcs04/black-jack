import { Component, Input, OnInit } from '@angular/core';
import { getPoints } from 'src/app/helper/get-points';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.scss'],
})
export class DealerComponent implements OnInit {
  @Input()
  set start(start: boolean) {
    if (start) {
      this.dealCard()
    }
  }

  public cards: Array<string> = ['red', 'red'];
  public points: number = 0

  public ngOnInit(): void {

  }

  public dealCard() {
    const card = Math.floor(Math.random() * 52) + 1;

    this.cards[0] = this.cards[0] === 'red' ? card.toString() : this.cards[0]

    this.points = getPoints(card)
    return;
  }
}
