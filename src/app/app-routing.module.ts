import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page404Component} from "@app/shared/layouts/page-404/page-404.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
