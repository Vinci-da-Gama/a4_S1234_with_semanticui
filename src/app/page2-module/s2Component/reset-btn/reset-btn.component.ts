import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-reset-btn',
	templateUrl: './reset-btn.component.html',
	styleUrls: ['./reset-btn.component.scss']
})
export class ResetBtnComponent implements OnInit {
	protected InputText: string;

	constructor() { }
	ngOnInit() { }

	protected clearText() {
		this.InputText = '';
	}

}
