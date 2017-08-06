import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-subject-title',
	templateUrl: './subject-title.component.html',
	styleUrls: ['./subject-title.component.scss']
})
export class SubjectTitleComponent implements OnInit {

	@Input() IconClasses: string;
	@Input() TitleText: string;

	constructor() { }

	ngOnInit() { }

}
