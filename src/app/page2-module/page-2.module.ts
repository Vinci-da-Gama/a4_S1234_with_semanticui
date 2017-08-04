import { NgModule } from '@angular/core';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './page2.component';

@NgModule({
  imports: [Page2RoutingModule],
  declarations: [Page2Component],
  exports: [Page2Component]
})
export class Page2Module { }
