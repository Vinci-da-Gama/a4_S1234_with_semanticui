import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post } from './post-group';
import { DataResolveServiceService } from './data-resolve-service.service';
import '../../operators';

@Component({
	selector: 'app-debug-pvtchildcomp',
	templateUrl: './debug-pvtchildcomp.component.html',
	styleUrls: ['./debug-pvtchildcomp.component.scss'],
	providers: [DataResolveServiceService]
})
export class DebugPvtchildcompComponent implements OnInit {

	protected owner = 'Mr. Bar';
	protected PostList: Post[];
	private MockDataUrl = 'assets/mockData/mock-post.json';

	constructor(private http: Http) { }
	ngOnInit() {
		this.fetchMockDate()
			.subscribe((res: Post[]) => {
				console.log('23 -- debug-pvtchildcomp.component.ts -- res is: ', res);
				this.PostList = res;
			})
	}

	private fetchMockDate() {
		return this.http.get(this.MockDataUrl)
			.map((res: Response) => res.json());
	}

}
