import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabingingComponentComponent } from './databinging-component.component';

describe('DatabingingComponentComponent', () => {
  let component: DatabingingComponentComponent;
  let fixture: ComponentFixture<DatabingingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabingingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabingingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
