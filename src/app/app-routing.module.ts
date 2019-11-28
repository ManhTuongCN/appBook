import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    //loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/list.module').then(m => m.ListPageModule)
  },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
