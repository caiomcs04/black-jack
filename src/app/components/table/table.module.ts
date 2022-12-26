import { CardsModule } from './../cards/cards.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';



@NgModule({
  declarations: [
    TableComponent
  ],
  exports:[TableComponent],
  imports: [
    CommonModule,CardsModule
  ]
})
export class TableModule { }
