import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoMessageComponent } from './two-message.component';

describe('TwoMessageComponent', () => {
  let component: TwoMessageComponent;
  let fixture: ComponentFixture<TwoMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
