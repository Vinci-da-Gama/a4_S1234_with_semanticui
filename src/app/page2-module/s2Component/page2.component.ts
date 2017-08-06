import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page2',
	templateUrl: './page2.component.html',
	styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {
	protected Titles: Object = {
		Title0: 'Two Messages',
		Title1: 'Reset Input',
		Title2: 'Record Log'
	};

	constructor() { }
	ngOnInit() { }

}
