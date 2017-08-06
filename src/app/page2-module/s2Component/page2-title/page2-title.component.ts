import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-page2-title',
	templateUrl: './page2-title.component.html',
	styleUrls: ['./page2-title.component.scss']
})
export class Page2TitleComponent implements OnInit {
	@Input() Page2HeaderText: string;

	constructor() { }
	ngOnInit() { }

}
