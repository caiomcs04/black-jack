import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  card!: string

  @Input() cardValue!: string;

  public ngOnInit(): void {
    this.card = this.card = `assets/cards-svg/${this.cardValue}.svg`;
  }
}
