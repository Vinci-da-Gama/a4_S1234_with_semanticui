import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedComponentComponent } from './nested-component.component';

describe('NestedComponentComponent', () => {
	let component: NestedComponentComponent;
	let fixture: ComponentFixture<NestedComponentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NestedComponentComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NestedComponentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
