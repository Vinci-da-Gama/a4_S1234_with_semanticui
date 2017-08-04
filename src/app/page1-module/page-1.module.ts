import { NgModule } from '@angular/core';

import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';

@NgModule({
  imports: [Page1RoutingModule],
  declarations: [Page1Component],
  exports: [Page1Component]
})
export class Page1Module { }
