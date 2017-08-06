import { Component, OnInit } from '@angular/core';

import { PeopleClass } from './people-class';

@Component({
	selector: 'app-ng-if-class-style-for-switch',
	templateUrl: './ng-if-class-style-for-switch.component.html',
	styleUrls: ['./ng-if-class-style-for-switch.component.scss']
})
export class NgIfClassStyleForSwitchComponent implements OnInit {

	protected IsItTrue = true;
	protected ExpressionTrue = 2 > 1;
	protected ExpressionToF = 2 > 1;
	protected PeopleList: PeopleClass[] = [
		new PeopleClass('Douglas_Pace', 35, 'MARS', 'cloud icon'),
		new PeopleClass('Mcleod_Mueller', 32, 'USA', 'payment icon'),
		new PeopleClass('Day_Meyers', 21, 'UK', 'privacy icon'),
		new PeopleClass('Aguirre_Ellis', 34, 'INDIA', 'unlock icon'),
		new PeopleClass('Cook_Tyson', 37, 'MALA', 'signal icon')
	];

	constructor() { }
	ngOnInit() { }

}
