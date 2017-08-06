import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfClassStyleForSwitchComponent } from './ng-if-class-style-for-switch.component';

describe('NgIfClassStyleForSwitchComponent', () => {
  let component: NgIfClassStyleForSwitchComponent;
  let fixture: ComponentFixture<NgIfClassStyleForSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfClassStyleForSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfClassStyleForSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
