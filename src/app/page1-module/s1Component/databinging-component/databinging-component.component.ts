import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-databinging-component',
	templateUrl: './databinging-component.component.html',
	styleUrls: ['./databinging-component.component.scss']
})
export class DatabingingComponentComponent implements OnInit {

	protected StringInterpolation = 'String Interpolator';
	protected IsDisabled = true;
	protected innerWord = 'This is inner Text.';
	protected eventText = '';
	protected NgModelText = '';

	constructor() { }
	ngOnInit() { }

	updateText(event: Event) {
		this.eventText = (<HTMLInputElement>event.target).value;
	}

}
