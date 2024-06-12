import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "@app/modules/home/pages/home/home.component";
import {MainHomeComponent} from "@app/modules/home/pages/main-home/main-home.component";

const routes: Routes = [
  {
    path: '',
    component: MainHomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
