import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Page2RoutingModule } from './page2-routing.module';
import { Page2Component } from './s2Component/page2.component';
import { TwoMessageComponent } from './s2Component/two-message/two-message.component';
import { ResetBtnComponent } from './s2Component/reset-btn/reset-btn.component';
import { RecordLogComponent } from './s2Component/record-log/record-log.component';
import { Page2TitleComponent } from './s2Component/page2-title/page2-title.component';

@NgModule({
  imports: [Page2RoutingModule, CommonModule, FormsModule],
  declarations: [
    Page2Component, TwoMessageComponent, ResetBtnComponent, RecordLogComponent, Page2TitleComponent
  ],
  exports: [Page2Component]
})
export class Page2Module { }
