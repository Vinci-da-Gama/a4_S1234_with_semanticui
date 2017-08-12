import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerCompOnChangeComponent } from './inner-comp-on-change.component';

describe('InnerCompOnChangeComponent', () => {
  let component: InnerCompOnChangeComponent;
  let fixture: ComponentFixture<InnerCompOnChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerCompOnChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerCompOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
