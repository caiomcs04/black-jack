import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealerComponent } from './dealer.component';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [
    DealerComponent
  ],
  exports:[DealerComponent],
  imports: [
    CommonModule, CardsModule
  ]
})
export class DealerModule { }
