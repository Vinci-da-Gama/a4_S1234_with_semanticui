import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component } from './page1.component';

const p1Route: Routes = [
    { path: 'page1', component: Page1Component }
];

@NgModule({
    imports: [
        RouterModule.forChild(p1Route)
    ],
    exports: [RouterModule]
})
export class Page1RoutingModule { }
