import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTitleComponent } from './subject-title.component';

describe('SubjectTitleComponent', () => {
  let component: SubjectTitleComponent;
  let fixture: ComponentFixture<SubjectTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
