import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'manage',
  //   loadChildren: () => import('./manage/manage.module').then( m => m.ManagePageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  {
    path: 'restock',
    loadChildren: () => import('./restock/restock.module').then( m => m.RestockPageModule)
  },
  {
    path: 'sale-history',
    loadChildren: () => import('./sale-history/sale-history.module').then( m => m.SaleHistoryPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
