import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaleHistoryPageRoutingModule } from './sale-history-routing.module';

import { SaleHistoryPage } from './sale-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaleHistoryPageRoutingModule
  ],
  declarations: [SaleHistoryPage]
})
export class SaleHistoryPageModule {}
