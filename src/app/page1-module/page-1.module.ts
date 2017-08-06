import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './s1Component/page1.component';
import { NestedComponentComponent } from './s1Component/nested-component/nested-component.component';
import { DatabingingComponentComponent } from './s1Component/databinging-component/databinging-component.component';
import { IdClassComponentComponent } from './s1Component/id-class-component/id-class-component.component';
import { NgIfClassStyleForSwitchComponent } from './s1Component/ng-if-class-style-for-switch/ng-if-class-style-for-switch.component';
import { FunctionAsExpressionComponent } from './s1Component/function-as-expression/function-as-expression.component';
import { SubjectTitleComponent } from './s1Component/subject-title/subject-title.component';

@NgModule({
	imports: [
		CommonModule, FormsModule, Page1RoutingModule
	],
	declarations: [
		Page1Component, NestedComponentComponent,
		DatabingingComponentComponent, IdClassComponentComponent,
		NgIfClassStyleForSwitchComponent, FunctionAsExpressionComponent,
		SubjectTitleComponent
	],
	exports: [Page1Component]
})
export class Page1Module { }
