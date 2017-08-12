import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugPvtchildcompComponent } from './debug-pvtchildcomp.component';

describe('DebugPvtchildcompComponent', () => {
  let component: DebugPvtchildcompComponent;
  let fixture: ComponentFixture<DebugPvtchildcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugPvtchildcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugPvtchildcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
