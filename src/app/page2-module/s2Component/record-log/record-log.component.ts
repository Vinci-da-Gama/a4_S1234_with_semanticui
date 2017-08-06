import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-record-log',
	templateUrl: './record-log.component.html',
	styleUrls: ['./record-log.component.scss']
})
export class RecordLogComponent implements OnInit {
	protected TimeStamps: string[] = [];

	constructor() { }
	ngOnInit() { }

	protected AddTime() {
		const Time = (new Date()).toString();
		this.TimeStamps.push(Time);
	}

}
