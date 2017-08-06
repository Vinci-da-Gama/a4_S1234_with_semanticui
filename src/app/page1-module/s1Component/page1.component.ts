import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-page1',
	templateUrl: './page1.component.html',
	styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

	protected IconsTexts = {
		Icon0: 'pointing right icon',
		Text0: '1. 2 Components, One insert into the Other',
		Icon1: 'user icon',
		Text1: '2. 4 ways to do data binding',
		Icon2: 'bar chart icon',
		Text2: '3. Id class selectorId to insert components',
		Icon3: 'map icon',
		Text3: '4. Ng if -- ng style -- ngclass -- ngFor ngswitch',
		Icon4: 'lock icon',
		Text4: '5. NgClass with function and {{ function() }}'
	};

	constructor() { }
	ngOnInit() { }

}
