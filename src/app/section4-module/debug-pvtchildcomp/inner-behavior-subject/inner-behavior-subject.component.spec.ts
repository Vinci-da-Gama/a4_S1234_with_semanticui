import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBehaviorSubjectComponent } from './inner-behavior-subject.component';

describe('InnerBehaviorSubjectComponent', () => {
  let component: InnerBehaviorSubjectComponent;
  let fixture: ComponentFixture<InnerBehaviorSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerBehaviorSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerBehaviorSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
