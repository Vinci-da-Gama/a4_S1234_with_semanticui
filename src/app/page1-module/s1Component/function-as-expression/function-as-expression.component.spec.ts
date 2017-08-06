import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAsExpressionComponent } from './function-as-expression.component';

describe('FunctionAsExpressionComponent', () => {
  let component: FunctionAsExpressionComponent;
  let fixture: ComponentFixture<FunctionAsExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionAsExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAsExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
