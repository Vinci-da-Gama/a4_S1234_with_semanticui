import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { S3RoutingModule } from './s3-routing.module';
import { LayoutOnlyComponent } from './layout-only/layout-only.component';

@NgModule({
  imports: [
    CommonModule, S3RoutingModule
  ],
  declarations: [LayoutOnlyComponent],
  exports: [LayoutOnlyComponent]
})
export class Section3ModuleModule { }
