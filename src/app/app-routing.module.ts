import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./components/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./components/charts/charts.module').then(m => m.ChartsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
