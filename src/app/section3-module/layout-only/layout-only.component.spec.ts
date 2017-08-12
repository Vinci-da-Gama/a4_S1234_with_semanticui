import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOnlyComponent } from './layout-only.component';

describe('LayoutOnlyComponent', () => {
  let component: LayoutOnlyComponent;
  let fixture: ComponentFixture<LayoutOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
