import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdClassComponentComponent } from './id-class-component.component';

describe('IdClassComponentComponent', () => {
  let component: IdClassComponentComponent;
  let fixture: ComponentFixture<IdClassComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdClassComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
