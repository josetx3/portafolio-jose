import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentOneComponent } from './pages/content-one/content-one.component';
import {HomeRoutingModule} from "@app/modules/home/home-routing.module";
import {SharedModule} from "@app/shared/shared.module";



@NgModule({
  declarations: [
    MainHomeComponent,
    HomeComponent,
    ContentOneComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
