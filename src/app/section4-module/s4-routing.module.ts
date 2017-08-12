import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebugPvtchildcompComponent } from './debug-pvtchildcomp/debug-pvtchildcomp.component';

const p4Route: Routes = [
	{ path: 'page4', component: DebugPvtchildcompComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(p4Route)
	],
	exports: [RouterModule]
})
export class S4RoutingModule { }
