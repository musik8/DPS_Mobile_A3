import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabnavPage,
    children:[
      {
        path: 'manage',
        children: [
          {
            path: '', 
            loadChildren:() => import('../manage/manage.module').then(m=>m.ManagePageModule)
          },
          {
            path: 'restock', 
            loadChildren:() => import('../restock/restock.module').then(m=>m.RestockPageModule)
          },
          {
            path: 'sale-history', 
            loadChildren:() => import('../sale-history/sale-history.module').then(m=>m.SaleHistoryPageModule)
            // ,children: [
            //   {
            //     path:':item_id',
            //     loadChildren:() => import('../historydetail/historydetail.module').then(m=>m.HistorydetailPageModule)
            //   }
        
            // ]
            
          }
        ]
      
      },
      {
        path: 'home',
        loadChildren:() => import('../home/home.module').then(m=>m.HomePageModule)
      }

    ]
  },{
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
