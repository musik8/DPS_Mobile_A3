import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleHistoryPage } from './sale-history.page';

const routes: Routes = [
  {
    path: '',
    component: SaleHistoryPage,
  },
  {
    path:':item_id',
    loadChildren:() => import('../historydetail/historydetail.module').then(m=>m.HistorydetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaleHistoryPageRoutingModule {}
