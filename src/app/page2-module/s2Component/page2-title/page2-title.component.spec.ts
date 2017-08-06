import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2TitleComponent } from './page2-title.component';

describe('Page2TitleComponent', () => {
	let component: Page2TitleComponent;
	let fixture: ComponentFixture<Page2TitleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [Page2TitleComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(Page2TitleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
