import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { S4RoutingModule } from './s4-routing.module';
import { DebugPvtchildcompComponent } from './debug-pvtchildcomp/debug-pvtchildcomp.component';
import { InnerChildComponent } from './debug-pvtchildcomp/inner-child/inner-child.component';
import { InnerCompOnChangeComponent } from './debug-pvtchildcomp/inner-comp-on-change/inner-comp-on-change.component';
import { InnerBehaviorSubjectComponent } from './debug-pvtchildcomp/inner-behavior-subject/inner-behavior-subject.component';

@NgModule({
	imports: [CommonModule, FormsModule, S4RoutingModule],
	declarations: [DebugPvtchildcompComponent, InnerChildComponent, InnerCompOnChangeComponent, InnerBehaviorSubjectComponent],
	exports: [DebugPvtchildcompComponent]
})
export class Section4ModuleModule { }
