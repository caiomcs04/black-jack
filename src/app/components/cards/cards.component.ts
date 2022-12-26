import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  randomCard!: number;
  card!: string;

  public ngOnInit(): void {
    this.selectCard();
  }

  public selectCard() {
    this.randomCard = Math.floor(Math.random() * 52) + 1;
    console.log(this.randomCard)
    this.card = `../../../assets/cards-svg/${this.randomCard}.svg`;
    return;
  }
}
