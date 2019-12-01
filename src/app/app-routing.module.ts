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
    loadChildren: () => import('./sing-in/sing-in.module').then(m => m.SingInPageModule)
    //loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/list.module').then(m => m.ListPageModule)
  },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfilePageModule' },
  { path: 'sing-in', loadChildren: './sing-in/sing-in.module#SingInPageModule' },
  { path: 'sing-up', loadChildren: './sing-up/sing-up.module#SingUpPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
