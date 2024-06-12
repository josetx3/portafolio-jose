import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layouts/nav/nav.component';
import { Page404Component } from './layouts/page-404/page-404.component';



@NgModule({
    declarations: [
        NavComponent,
        Page404Component
    ],
    exports: [
        NavComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
