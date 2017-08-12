import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Post, GroupPosts } from '../post-group';
import { DataResolveServiceService } from '../data-resolve-service.service';

@Component({
	selector: 'app-inner-comp-on-change',
	templateUrl: './inner-comp-on-change.component.html',
	styleUrls: ['./inner-comp-on-change.component.scss']
})
export class InnerCompOnChangeComponent implements OnInit, OnChanges {

	@Input() dataReceiver2nd: Post[];
	protected groupPosts: GroupPosts[];
	protected list2nd: Post[];

	constructor(private dataResolve: DataResolveServiceService) { }

	ngOnInit() { }

	ngOnChanges(changes: SimpleChanges) {
		if (changes['dataReceiver2nd']) {
			this.groupPosts = this.dataResolve.groupByCategory(this.dataReceiver2nd);
			if (this.groupPosts.length > 0) {
				this.list2nd = this.groupPosts[0].posts;
			} else {
				return;
			}
		}
	}

}
