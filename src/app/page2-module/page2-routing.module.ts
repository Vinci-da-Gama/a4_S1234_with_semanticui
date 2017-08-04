import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Page2Component } from './page2.component';

const P2Route: Routes = [
    { path: 'page2', component: Page2Component }
];

@NgModule({
    imports: [
        RouterModule.forChild(P2Route)
    ],
    exports: [RouterModule]
})
export class Page2RoutingModule { }
