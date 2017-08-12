import { Injectable } from '@angular/core';

import { Post, GroupPosts } from './post-group';

@Injectable()
export class DataResolveServiceService {

	protected groupByCategory(passedInData: Post[]): GroupPosts[] {
		// our logic to group the posts by category
		if (!passedInData) {
			return [];
		} else {
			// find out all the unique categories
			const categories = new Set(passedInData.map(x => x.category));
			console.log('15 -- categories are: ', categories);

			// produce a list of category with its posts
			const result = Array.from(categories)
				.map(x => ({
					category: x ? x : 'No Category',
					posts: passedInData.filter(post => post.category === x)
				}));
			console.log('25 -- data-resolve-service.service -- result is: ', result);
			return result;
		}
	};

}
