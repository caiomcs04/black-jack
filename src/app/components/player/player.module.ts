import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsModule } from '../cards/cards.module';
import { PlayerComponent } from './player.component';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  exports:[PlayerComponent],
  imports: [
    CommonModule, CardsModule
  ]
})
export class PlayerModule { }
