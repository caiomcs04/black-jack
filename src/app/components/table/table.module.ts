import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { DealerModule } from '../dealer/dealer.module';
import { PlayerModule } from '../player/player.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  exports:[TableComponent],
  imports: [
    CommonModule,DealerModule,PlayerModule
  ]
})
export class TableModule { }
