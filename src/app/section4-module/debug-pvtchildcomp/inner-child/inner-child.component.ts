import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Post, GroupPosts } from '../post-group';
import { DataResolveServiceService } from '../data-resolve-service.service';

@Component({
	selector: 'app-inner-child',
	templateUrl: './inner-child.component.html',
	styleUrls: ['./inner-child.component.scss']
})
export class InnerChildComponent implements OnInit {
	private _receivedData = new BehaviorSubject<Post[]>([]);

	@Input() dataReceiver1st: Post[];
	protected groupPosts1st: GroupPosts[];
	protected list1st: Post[];

	// change data to use getter and setter
	@Input()
	set data(value) {
		// set the latest value for _data BehaviorSubject
		this._receivedData.next(value);
	};

	get data() {
		// get the latest value from _data BehaviorSubject
		return this._receivedData.getValue();
	}

	constructor(private dataResolve: DataResolveServiceService) { }
	ngOnInit() {
		// basic way -- get data from [property] binding.
		// this.groupPosts1st = this.groupByCategory(this.dataReceiver1st);
		this.groupPosts1st = this.dataResolve.groupByCategory(this.dataReceiver1st);
		this.list1st = this.groupPosts1st[0].posts;

		// BehaviorSubject way to get data.
		// this._receivedData
		// 	.subscribe((x: Post[]) => {
		// 		console.log('37 -- x is: ', x);
		// 		this.groupPosts = this.groupByCategory(this.data);
		// 	});
	}

}
