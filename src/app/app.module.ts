import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { SuiModule } from 'ng2-semantic-ui';
import { SharedModule } from './share-module/share-module.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitPageModule } from './init-page-content/init-page.module';
import { Page1Module } from './page1-module/page-1.module';
import { Page2Module } from './page2-module/page-2.module';
import { Section3ModuleModule } from './section3-module/section3-module.module';
import { Section4ModuleModule } from './section4-module/section4-module.module';

@NgModule({
	imports: [
		BrowserModule, HttpModule, SuiModule, SharedModule, AppRoutingModule, InitPageModule,
		Page1Module, Page2Module, Section3ModuleModule, Section4ModuleModule
	],
	declarations: [AppComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '/'
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
