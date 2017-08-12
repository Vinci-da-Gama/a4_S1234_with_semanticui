import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutOnlyComponent } from './layout-only/layout-only.component';

const shopRoute: Routes = [
	{ path: 'page3', component: LayoutOnlyComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(shopRoute)
	],
	exports: [RouterModule]
})
export class S3RoutingModule { }
