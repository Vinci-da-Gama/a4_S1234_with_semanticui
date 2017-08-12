import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Post } from '../post-group';

@Component({
	selector: 'app-inner-behavior-subject',
	templateUrl: './inner-behavior-subject.component.html',
	styleUrls: ['./inner-behavior-subject.component.scss']
})
export class InnerBehaviorSubjectComponent implements OnInit {

	private _dataReceiver = new BehaviorSubject<Post[]>([]);
	protected list3rd: Post[];
	@Input()
	set dataReceiver3rd(val) {
		this._dataReceiver.next(val);
	};

	get dataReceiver3rd() {
		return this._dataReceiver.getValue();
	};

	constructor() { }
	ngOnInit() {
		this._dataReceiver
			.subscribe((res: Post[]) => {
				this.list3rd = res;
			});
	}

}
